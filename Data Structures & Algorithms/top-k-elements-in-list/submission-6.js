class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = {}
    
        for(const num of nums){
            frequencyMap[num] = (frequencyMap[num] || 0) + 1
        }

        const pairs = Object.entries(frequencyMap)
        .map(([num, frequency]) => [frequency, parseInt(num)])
        .sort((a, b) => b[0] - a[0])

        console.log({frequencyMap, pairs })

        return pairs.slice(0, k).map(pair => pair[1])
    }
}
