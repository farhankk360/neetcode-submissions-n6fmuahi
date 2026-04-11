class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums)
        let longestSeqStreak = 0

        for(let num of nums){
            if(!numsSet.has(num - 1)){
                let currentNum = num
                let currentSeqCount = 1

                while(numsSet.has(currentNum + 1)){
                    currentNum += 1
                    currentSeqCount += 1
                }

                if(currentSeqCount > longestSeqStreak) longestSeqStreak = currentSeqCount
            }
        }

        return longestSeqStreak
    }
}
