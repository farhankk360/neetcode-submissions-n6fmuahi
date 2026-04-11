class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        const sFrequencyMap = this.strToFrequencyMap(s)
        const tFrequencyMap = this.strToFrequencyMap(t)

        for(let char in sFrequencyMap){
            if(sFrequencyMap[char] !== tFrequencyMap[char]) return false
        }

        return true
    }

    strToFrequencyMap(str){
        const frequencyMap = {}

        for(let i = 0; i < str.length; i++){
            if(!frequencyMap[str[i]]){
                frequencyMap[str[i]] = 1
            } else {
                frequencyMap[str[i]] += 1
            }

        }

        return frequencyMap
    }
}
