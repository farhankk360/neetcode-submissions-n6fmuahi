class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        ROWS = len(matrix)
        COLS = len(matrix[0])

        left = 0
        right = (ROWS * COLS) - 1

        while left <= right:
            mid = ((left + right) // 2)

            mid_row = mid // COLS
            mid_col = mid % COLS

            if matrix[mid_row][mid_col] == target:
                return True

            if matrix[mid_row][mid_col] > target:
                right = mid - 1
            else:
                left = mid + 1

        return False
        