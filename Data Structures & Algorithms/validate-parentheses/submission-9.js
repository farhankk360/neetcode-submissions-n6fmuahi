class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false //If a string has an odd number of characters (e.g., 3, 5, 9), it is mathematically impossible for it to be valid.

        // Closing Bracket -> Opening Bracket
        const bracketMap = {
            ')': '(',
            '}': '{',
            ']': '['
        };


        const stack = []

        for (const char of s) {
            if (bracketMap[char]) {
                const topElement = stack.pop();

                if (bracketMap[char] !== topElement) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0
    }
}
