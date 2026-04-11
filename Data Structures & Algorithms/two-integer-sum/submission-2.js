class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevValues = {}

        for(let i = 0; i < nums.length; i++){
            const currentNum = nums[i]
            const diff = target - currentNum
            
            if(prevValues[diff] !== undefined){
                return [prevValues[diff], i]
            }

            prevValues[currentNum] = i
        }

        return []
    }
}
