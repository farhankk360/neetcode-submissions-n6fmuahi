class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        left = 0
        right = (len(matrix) * len(matrix[0])) - 1

        while left <= right:
            mid = ((left + right) // 2)

            mid_row = mid // len(matrix[0])
            mid_col = mid % len(matrix[0])

            print(matrix[mid_row][mid_col])

            if matrix[mid_row][mid_col] == target:
                return True

            if matrix[mid_row][mid_col] > target:
                right = mid - 1
            else:
                left = mid + 1

        return False
        