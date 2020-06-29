/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
    const coins = [1, 5, 10, 25];
    let dp = Array.from({ length: n + 1 }, () => 0);
    dp[0] = 1;
    for (const coin of coins) {
        for (let i = coin; i <= n; i++) {
            if (i >= coin) {
                dp[i] = (dp[i] + dp[i - coin]) % (1e9+7);
            }
        }
    }
    return dp[n];
};

console.log(waysToChange(900750));