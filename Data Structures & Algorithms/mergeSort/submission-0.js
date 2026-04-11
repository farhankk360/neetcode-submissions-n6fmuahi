/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        const length = pairs.length

        for(let width = 1; width < length; width *= 2){
            for(let i = 0; i < length; i += 2 * width){

                const leftArray = pairs.slice(i, i + width)
                const rightArray = pairs.slice(i + width, Math.min(i + 2 * width, length))
                let result = [];
                let k = 0;
                let l = 0;
                
                while (k < leftArray.length && l < rightArray.length) {
                    if(leftArray[k].key <= rightArray[l].key){
                        result.push(leftArray[k])
                        k++
                    } else {
                        result.push(rightArray[l])
                        l++
                    }
                }
                
                result = [...result, ...leftArray.slice(k), ...rightArray.slice(l)];

                pairs.splice(i, result.length, ...result)
            }
        }

        return pairs
    }
}
