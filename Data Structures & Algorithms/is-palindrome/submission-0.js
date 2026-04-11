class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0
        let right = s.length - 1

        while(left < right){
           // we need to move pointers forward until we find a letter/number

           while(left < right && !this.isAlphanumeric(s[left])){
            left++
           }

           while(right > left && !this.isAlphanumeric(s[right])){
            right--
           }

           if(s[left].toLowerCase() !== s[right].toLowerCase()) return false

           left++
           right--
        }

        return true
    }

    // we could do regex, but i am going in mkers...
    isAlphanumeric(char){
        const code = char.charCodeAt(0)

        return (
            code >= 48 && code <= 57 || // 0-9
            code >= 65 && code <= 90 || // A-Z
            code >= 97 && code <= 122 // a-z
        )
    }
}
