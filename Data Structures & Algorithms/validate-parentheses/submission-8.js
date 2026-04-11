class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length < 2) return false

        const closingBrackets = new Set([')', '}', ']'])
        const openingBracket = new Set(['(', '{', '['])
        const correspondingBrackets = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        const stack = []

        for(let i = 0; i < s.length; i++){
            if(openingBracket.has(s[i])) stack.push(s[i])

            if(closingBrackets.has(s[i])){
                const openingBracket = stack.pop()
                if(correspondingBrackets[s[i]] !== openingBracket) return false
            }
        }
        return stack.length ? false : true
    }
}
