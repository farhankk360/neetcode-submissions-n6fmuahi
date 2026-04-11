class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0
        let right = height.length - 1

        let leftMax = height[left]
        let rightMax = height[right]

        let totalWater = 0

        while(left < right){
            if(leftMax < rightMax){
                left++

                const currentHeight = height[left]

                if(currentHeight < leftMax){
                    totalWater += leftMax - currentHeight
                } else {
                    leftMax = currentHeight
                }
            } else {
                right--

                const currentHeight = height[right]

                if(currentHeight < rightMax){
                    totalWater += rightMax - currentHeight
                } else {
                    rightMax = currentHeight
                }
            }
        }

        return totalWater
    }
}
