class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const products = []

        for(let i = 0; i < nums.length; i++){
            const currentNums = [...nums]

            currentNums.splice(i, 1)

            console.log(currentNums)
            
            let product = null
            for(let num of currentNums){
                if(product === null) {
                    product = num
                } else {
                    product = product * num

                }

            }

            products.push(product)
        }

        return products
    }
}
