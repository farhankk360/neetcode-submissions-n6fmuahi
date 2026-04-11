class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxCount = 0
        let left = 0
        let right = 0
        const currentCharsSet = new Set()

        while(right < s.length){

            while(currentCharsSet.has(s[right])){
                currentCharsSet.delete(s[left])
                left++
            }

            currentCharsSet.add(s[right])

            maxCount = Math.max(maxCount, currentCharsSet.size)
            right++
        }

        return maxCount
    }
}
