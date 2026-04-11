class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const products = []
        const length = nums.length

        const prefix = new Array(length)
        const suffix = new Array(length)

        prefix[0] = 1
        suffix[length - 1] = 1

        for (let i = 1; i < length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        for(let i = length - 2; i >= 0; i--){
            suffix[i] = suffix[i + 1] * nums[i + 1]
        }

        for(let i = 0; i < length; i++){
            products[i] = prefix[i] * suffix[i]
        }

        return products
    }
}
