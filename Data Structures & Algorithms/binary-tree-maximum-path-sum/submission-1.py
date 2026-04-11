# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        # def dfs(root):
        #     if not root:
        #         return [True, 0]
            
        #     left, right = dfs(root.left), dfs(root.right)

        #     balanced = left[0] and right[0] and abs(left[1] - right[1]) <= 1

        #     return [balanced, 1 + max(left[1], right[1])]

        # return dfs(root)[0]

        self.global_max = float('-inf')

        def dfs(node):
            if not node:
                return 0

            left, right = max(dfs(node.left), 0), max(dfs(node.right), 0)

            current_sum = node.val + left + right
            self.global_max = max(self.global_max, current_sum)

            return node.val + max(left, right)

            

        dfs(root)

        return self.global_max
