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
    quickSort(pairs) {
        this.quickSortHelper(pairs, 0, pairs.length - 1)
        return pairs
    }

    quickSortHelper(arr, start, end){
        if (start >= end) return

        let pivot = arr[end];
        let i = start - 1; // The "wall"

        for (let j = start; j < end; j++) {
            if(arr[j].key < pivot.key){
                i++
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }

        [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]]

        i += 1 

        this.quickSortHelper(arr, start, i - 1);
        this.quickSortHelper(arr, i + 1, end);
    }
}
