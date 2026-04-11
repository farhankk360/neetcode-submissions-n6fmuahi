class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {}
        const indices = []

        for(let i = 0; i < nums.length; i++){
            const currentNum = nums[i]
            
            if(!hashMap[currentNum]){
                hashMap[currentNum] = []
            }

            hashMap[currentNum].push(i)

            // const difference = target - currentNum


            // if(hashMap[difference] > -1) {
            //     console.log({ hashMap, currentNum, difference, i })
            //     indices.push(hashMap[difference])
            // }
            // if(indices.length === 2) break
        }

        for(let key in hashMap){
            const num = +key
            const difference = target - num

            if(hashMap[difference] !== undefined && num + difference === target){
                const indexOne = hashMap[difference].shift()
                const indexTwo = hashMap[key].shift()

                return [indexOne, indexTwo]
            }
        }

        return indices
    }
}
