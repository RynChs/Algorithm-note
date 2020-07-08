/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0) return 0;
    let maxarea = 0;
    let R = matrix.length, C = matrix[0].length;
    let dp = Array.from({ length: R }, () => Array.from({ length: C }, () => 0));
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (matrix[r][c] === '1') {
                dp[r][c] = c === 0 ? 1 : dp[r][c - 1] + 1; // 记录宽度
                let width = dp[r][c];
                for (let k = r; k >= 0; k--) {
                    if (dp[k][c] === 0) break; // 为0时无法构成矩形
                    width = Math.min(width, dp[k][c]); // 最小宽度
                    maxarea = Math.max(maxarea, width * (r - k + 1)); // 从下至上计算最大面积
                }
            }
        }
    }
    return maxarea;
};

console.log(maximalRectangle([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
  ]));