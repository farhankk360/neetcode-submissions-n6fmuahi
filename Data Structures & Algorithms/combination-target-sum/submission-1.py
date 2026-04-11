class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        if not nums: return []

        result = []
        subset = []

        def dfs(i, current_target):
            if current_target == 0:
                result.append(subset.copy())
                return

            if current_target < 0 or i >= len(nums):
                return
                
            subset.append(nums[i])
            dfs(i, current_target - nums[i])

            subset.pop()
            dfs(i + 1, current_target)
            
        dfs(0, target)

        return result
