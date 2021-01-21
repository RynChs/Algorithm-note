/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let dp = [0, 1];
    if (N < 2) {
        return dp[N];
    } else {
        for (let i = 2; i <= N; i++) {
            dp[i] = dp[i - 2] + dp[i - 1];
        }
    }
    return dp[dp.length - 1];
};