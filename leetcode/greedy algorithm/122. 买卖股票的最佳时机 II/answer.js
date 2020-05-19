/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0;
    let current = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (current >= prices[i]) {
            current = prices[i];
        } else {
            if (prices[i + 1] > prices[i]) {
                i === prices.length - 1 && (sum += prices[i] - current);
            } else {
                sum += prices[i] - current;
                current = prices[i + 1];
            }
        }
    }
    return sum;
};

const arr1 = [7,1,5,3,6,4];
console.log(maxProfit(arr1));

const arr2 = [1,2,3,4,5];
console.log(maxProfit(arr2));

const arr3 = [2,1,4,5,2,9, 7];
console.log(maxProfit(arr3));