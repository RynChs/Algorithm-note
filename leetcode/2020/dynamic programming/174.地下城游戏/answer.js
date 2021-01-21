/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    let n = dungeon.length, m = dungeon[0].length;
    let dp = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => Number.MAX_SAFE_INTEGER));
    dp[n][m - 1] = dp[n - 1][m] = 1;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            let minn = Math.min(dp[i + 1][j], dp[i][j + 1]);
            dp[i][j] = Math.max(minn - dungeon[i][j], 1);
        }
    }
    return dp[0][0];
};

console.log(calculateMinimumHP([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5]
]));