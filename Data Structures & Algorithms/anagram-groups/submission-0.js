class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const map = {}

       for(let word of strs){
        const count = new Array(26).fill(0)

        for(let char of word){
            count[char.charCodeAt(0) - 97]++
        }

        const key = count.join('#');

        if(!map[key]) map[key] = []

        map[key].push(word)
       }

       return Object.values(map)
    }
}