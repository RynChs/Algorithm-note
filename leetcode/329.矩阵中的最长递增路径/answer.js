/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let row = matrix.length,
    colum = matrix[0] ? matrix[0].length : 0,
    _result = 0,
    dp = Array.from({ length: row }, () => Array(colum).fill(0))

    // matrix长宽为0 返回结果值0
    if (row === 0 || colum === 0) return _result
    // 遍历枚举起点
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < colum; j++) {
            // 变量行列查询到所以可能的起点
            _result = Math.max(_result, dfs(i, j))
        }
    }

    // 指定起点坐标查询其最大递增路线
    function dfs(r, c) {
        // 不为0则什么已经计算
        if (dp[r][c]) return dp[r][c]

        // 以其自身做起点 默认节点数1
        dp[r][c] = 1

        // 四个方向
        // 左侧
        if (c - 1 >= 0 && matrix[r][c - 1] > matrix[r][c])
            dp[r][c] = Math.max(dp[r][c], dfs(r, c - 1) + 1)
        // 右侧
        if (c + 1 < colum && matrix[r][c + 1] > matrix[r][c])
            dp[r][c] = Math.max(dp[r][c], dfs(r, c + 1) + 1)
        // 上方
        if (r - 1 >= 0 && matrix[r - 1][c] > matrix[r][c])
            dp[r][c] = Math.max(dp[r][c], dfs(r - 1, c) + 1)
        // 下方
        if (r + 1 < row && matrix[r + 1][c] > matrix[r][c])
            dp[r][c] = Math.max(dp[r][c], dfs(r + 1, c) + 1)

        // 返回指定坐标结果
        return dp[r][c];
    }
    return _result
};