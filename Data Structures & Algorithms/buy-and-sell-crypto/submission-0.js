class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let buy = prices[0]

        for(let i = 1; i < prices.length; i++){
            if(buy < prices[i]){
                let profit = prices[i] - buy
                if(profit > maxProfit) maxProfit = profit
            } else {
                buy = prices[i]
            }
            
        }

        return maxProfit
    }
}
