class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        result = []

        def backtrack(open_paren, close_paren, parentheses):
            if len(parentheses) == 2*n:
                result.append(parentheses)

            if open_paren < n:
                backtrack(open_paren + 1, close_paren, parentheses + "(")

            if close_paren < open_paren:
                backtrack(open_paren, close_paren + 1, parentheses + ")")


        backtrack(0, 0, "")

        return result