class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows = len(matrix)
        cols = len(matrix[0])

        left = 0
        right = (rows * cols) - 1

        while left <= right:
            mid = ((left + right) // 2)

            mid_row = mid // cols
            mid_col = mid % cols

            if matrix[mid_row][mid_col] == target:
                return True

            if matrix[mid_row][mid_col] > target:
                right = mid - 1
            else:
                left = mid + 1

        return False
        