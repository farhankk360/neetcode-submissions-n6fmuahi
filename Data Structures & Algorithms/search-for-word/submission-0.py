class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        
        def dfs(row, col, i, board, visited):
            # Check bounds and visited first
            if row < 0 or row >= len(board) or col < 0 or col >= len(board[0]):
                return False
            
            # Check if visited or character doesn't match
            if (row, col) in visited:
                return False
            
            if board[row][col] != word[i]:
                return False
            
            # If this is the last character AND it matches, we found the word
            if i == len(word) - 1:
                return True

            # mark
            visited.add((row, col))
            
            # recurse in all directions, up, down, left, right
            for direction_row, direction_col in [[1, 0], [-1, 0], [0, 1], [0, -1]]:
                if dfs(row + direction_row, col + direction_col, i + 1, board, visited):
                    return True
            
            visited.remove((row, col))
            return False
        
        for r in range(len(board)):
            for c in range(len(board[0])):
                if board[r][c] == word[0]:
                    if dfs(r, c, 0, board, set()):
                        return True
        
        return False
        