/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) return 0;
    let m = grid.length;
    let n = grid[0].length;
    let dp = new Array(n).fill(0);
    dp[0] = grid[0][0];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j > 0) {
                dp[j] = grid[0][j] + dp[j - 1];
            } else if (i > 0 && j === 0) {
                dp[0] += grid[i][0];
            } else if (i > 0 && j > 0) {
                dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1]);
            }
        }
    }
    return dp[n - 1];
};

console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
]));