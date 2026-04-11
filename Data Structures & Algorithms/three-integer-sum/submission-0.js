class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const results = []

        nums.sort((a, b) => a - b)

        for(let i = 0; i < nums.length; i++){
            const a = nums[i]

            // no point if the number is greater
            if(a > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // the regular two sum
            let left = i + 1
            let right = nums.length - 1

            while(left < right){
                const threeSum = a + nums[left] + nums[right]

                if(threeSum > 0){
                    right--
                } else if(threeSum < 0){
                    left++
                } else {
                    results.push([a, nums[left], nums[right]])

                    left++
                    right--

                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                }
            }
        }
        return results
    }
}