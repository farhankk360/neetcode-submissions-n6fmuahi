class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const prevValues = {}

        for(let i = 0; i < nums.length; i++){
            const val = nums[i]

            if(prevValues[val]) return true

            prevValues[val] = true
        }

        return false
    }
}
