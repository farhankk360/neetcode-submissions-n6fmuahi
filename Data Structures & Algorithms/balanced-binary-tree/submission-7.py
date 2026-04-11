# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        # def dfs(root):
        #     if not root:
        #         return [True, 0]
            
        #     left, right = dfs(root.left), dfs(root.right)

        #     balanced = left[0] and right[0] and abs(left[1] - right[1]) <= 1

        #     return [balanced, 1 + max(left[1], right[1])]

        # return dfs(root)[0]

        if not root: return True

        stack = [(root, False)]
        heights = {}

        while stack:
            node, visited = stack.pop()

            if not node:
                heights[node] = 0
                continue

            if not visited:
                stack.append((node, True))

                if node.left:
                    stack.append((node.left, False))

                if node.right:
                    stack.append((node.right, False))
            else:
                left_height = heights.get(node.left, 0)
                right_height = heights.get(node.right, 0)
                
                if abs(left_height - right_height) > 1:
                    return False
                
                heights[node] = 1 + max(left_height, right_height)
        
        return True












            