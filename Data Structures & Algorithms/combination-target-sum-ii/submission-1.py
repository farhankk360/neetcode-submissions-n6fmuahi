class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        if not candidates: return []

        candidates.sort()
        result = []
        subset = []

        def dfs(i, current_target):

            if current_target == 0:
                result.append(subset.copy())
                return
            if current_target < 0 or i >= len(candidates): return

            subset.append(candidates[i])

            dfs(i + 1, current_target - candidates[i])

            while i + 1 < len(candidates) and candidates[i] == candidates[i + 1]:
                i += 1

            subset.pop()
            dfs(i + 1, current_target)
            
        dfs(0, target)

        return result