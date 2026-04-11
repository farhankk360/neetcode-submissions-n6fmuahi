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
            // find delimiter index
            const delimiterIndex = str.indexOf('%', head)

            // get the word length
            const wordLength = Number(str.substring(delimiterIndex, head))

            // extract the word
            const word = str.substring(delimiterIndex + 1, wordLength + delimiterIndex + 1)

            decodedStrings.push(word)

            // jump head to next delimiter
            head = wordLength + delimiterIndex + 1
        }


        return decodedStrings
    }
}
