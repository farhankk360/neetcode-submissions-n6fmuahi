class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const magzineCharCount = {}

        for(let char of magazine){
            magzineCharCount[char] = (magzineCharCount[char] || 0) + 1
        }

        for(let char of ransomNote){
            if(!magzineCharCount[char]) return false
            
            magzineCharCount[char]-- 
        }

        return true
    }
}
