/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let res = Array.from({ length: n }, () => Array.from({ length: n }));
    let left = 0, right = n - 1;
    let top = 0, bottom = n - 1;
    let count = 1;
    while (count <= n * n) {
        // 上横
        for (let i = left; i <= right; i++) {
            res[top][i] = count;
            count++;
        }
        // 右竖
        for (let i = top + 1; i <= bottom; i++) {
            res[i][right] = count;
            count++;
        }
        // 下横
        for (let i = right - 1; i >= left; i--) {
            res[bottom][i] = count;
            count++;
        }
        // 左竖
        for (let i = bottom - 1; i > top; i--) {
            res[i][left] = count;
            count++;
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    return res;
};

console.log(generateMatrix(3));