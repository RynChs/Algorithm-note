/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    nums = [1, ...nums, 1];
    let n = nums.length;
    let dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
    for (let i = n - 3; i >= 0; i--) {
        for (let j = i + 2; j < n; j++) {
            for (let k = i + 1; k < j; k++) {
                let sum = nums[i] * nums[k] * nums[j];
                sum += dp[i][k] + dp[k][j];
                dp[i][j] = Math.max(dp[i][j], sum);
            }
        }
    }
    return dp[0][n - 1];
};

console.log(maxCoins([3,1,5,8]));