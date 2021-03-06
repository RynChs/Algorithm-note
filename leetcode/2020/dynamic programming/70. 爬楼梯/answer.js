/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = [0, 1, 2];
    if (n < 3) {
        return dp[n];
    }
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};

console.log(climbStairs(4));