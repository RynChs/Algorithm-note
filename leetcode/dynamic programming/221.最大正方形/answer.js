/**
 * @param {character[][]} matrix
 * @return {number}
 */
// 根据上 左 斜对角 求最长的边
var maximalSquare = function(matrix) {
    let ans = 0;
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return ans;
    }
    const row = matrix.length;
    const col = matrix[0].length;
    let dp = Array.from({length: row}, () => Array.from({length: col}, () => 0));
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const currNum = parseInt(matrix[i][j]);
            if (currNum === 1) {
                if (i === 0 || j === 0) {
                    dp[i][j] = currNum;
                } else {
                    // 上
                    const up = parseInt(dp[i - 1][j]);
                    // 左
                    const left = parseInt(dp[i][j - 1]);
                    // 斜对角
                    const diagonal = parseInt(dp[i - 1][j - 1]);
                    dp[i][j] = Math.min(diagonal, Math.min(up, left)) + 1;
                }
                ans = Math.max(ans, dp[i][j]);
            }
        }
    }
    return ans * ans;
};

const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '1', '1', '0']
];
console.log(maximalSquare(matrix));