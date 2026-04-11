class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
    let left = 0
    let right = 0

    const frequencyMapT = {}
    let validStr = ''

    for(let char of t){
        frequencyMapT[char] = (frequencyMapT[char] || 0) + 1
    }

    while(right <= s.length){
        const currentFrequencyMap = {}

        for(let i = left; i < right; i++){
            currentFrequencyMap[s[i]] = (currentFrequencyMap[s[i]] || 0) + 1
        }

        let frequencyMatch = true

        for(let char in frequencyMapT){
            if((currentFrequencyMap[char] || 0) < frequencyMapT[char]) frequencyMatch = false
        }
        
        if(frequencyMatch){
            const currentSubStr = s.substring(left, right) 
            if (validStr === '' || currentSubStr.length < validStr.length) validStr = currentSubStr
            left++
        } else {
            right++
        }
    }

    return validStr
    }
}