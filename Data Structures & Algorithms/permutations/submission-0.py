class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        if not nums: return []

        result = []
        subset = []

        def dfs():
            if len(subset) == len(nums):
                result.append(subset.copy())
                return

            for x in nums:
                if x not in subset:
                    subset.append(x)
                    dfs()
                    subset.pop()
            
        dfs()

        return result