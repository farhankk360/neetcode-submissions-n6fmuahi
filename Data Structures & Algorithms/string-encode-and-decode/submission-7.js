class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = ''

        for(let str of strs){
            encodedString += `${str.length}%${str}`
        }

        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedStrings = []

        let head = 0

        while(head < str.length){
            const delimiterIndex = str.indexOf('%', head)
            const charCount = parseInt(str.substring(head, delimiterIndex))
            const extractedStr = str.substring(delimiterIndex + 1, delimiterIndex + 1 + charCount)

            decodedStrings.push(extractedStr)

            console.log({head, delimiterIndex, charCount, extractedStr, str})
            head = charCount + delimiterIndex + 1
        }


        return decodedStrings
    }
}
