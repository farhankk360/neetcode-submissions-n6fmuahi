class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:        
        results = []

        def backtrack(start):
            if start == len(nums):
                return results.append(nums.copy())

            for i in range(start, len(nums)):
                [nums[start], nums[i]] = [nums[i], nums[start]]
                
                backtrack(start + 1)

                [nums[start], nums[i]] = [nums[i], nums[start]]
        
        backtrack(0)

        return results
