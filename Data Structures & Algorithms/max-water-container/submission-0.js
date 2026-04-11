class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let maxArea = 0

        while(left < right){
            const currentHeight = Math.min(heights[left], heights[right])
            const currentWidth = right - left

            const area = currentHeight * currentWidth

            if(area > maxArea){
                maxArea = area
            }

            if(heights[left] < heights[right]){
                left++
            } else {
                right--
            }
        }

        return maxArea
    }
}
