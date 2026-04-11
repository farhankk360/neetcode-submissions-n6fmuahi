import math

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        sorted_array = nums1 + nums2
        sorted_array.sort()
        n = len(sorted_array)

        if n % 2 != 0:
            return sorted_array[n // 2]

        return (sorted_array[(n - 1) // 2] + sorted_array[n // 2]) / 2.0
        