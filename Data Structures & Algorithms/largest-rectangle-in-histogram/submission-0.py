class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        max_area = 0
        stack = []

        for i, height in enumerate(heights):
            start_index = i

            while stack and stack[-1][1] > height:
                popped_index, popped_height = stack.pop()

                width = i - popped_index
                area = popped_height * width

                max_area = max(max_area, area)

                start_index = popped_index
            
            stack.append((start_index, height))

        for i, height in stack:
            width = len(heights) - i
            area = height * width

            max_area = max(max_area, area)

        return max_area
