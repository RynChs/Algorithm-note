/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    let len = nums.length;
    let dp = JSON.parse(JSON.stringify(nums));
    for (let i = len - 2; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j - 1]);
        }
    }
    return dp[len - 1] >= 0;
};

console.log(PredictTheWinner([1, 5, 2]));
console.log(PredictTheWinner([1, 5, 233, 7]));