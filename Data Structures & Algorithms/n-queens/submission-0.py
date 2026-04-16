class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        results = []
        board = [["."] * n for _ in range(n)]

        cols = set()
        positive_diags = set()
        negative_diags = set()

        def backtrack(row):
            # Our board is a list of lists: [['.', 'Q'], ['Q', '.']]
            # we want a list of strings: [".Q", "Q."]
            if row == n:
                formatted_board = ["".join(r) for r in board]
                results.append(formatted_board)
            
            # Try to place a queen in every column of the current row
            for col in range(n):
                if col in cols or (row + col) in positive_diags or (row - col) in negative_diags:
                    continue
                
                # mark
                cols.add(col)
                positive_diags.add(row + col)
                negative_diags.add(row - col)
                board[row][col] = "Q"

                # recurse
                backtrack(row + 1)

                # undo
                cols.remove(col)
                positive_diags.remove(row + col)
                negative_diags.remove(row - col)
                board[row][col] = "."


        backtrack(0)
    
        return results
        