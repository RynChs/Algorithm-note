/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const n = matrix.length;
    if (n * n < k) return null;
    let min = matrix[0][0];
    let max = matrix[n - 1][n - 1];
    while (min < max) {
        let mid = min + ((max - min) >> 1); // 取最大值和最小值中间值
        if (check(matrix, k, n, mid)) { 
            max = mid;
        } else {
            min = mid + 1;
        }
    }
    return min;
};

function check(matrix, k, n, mid) {
    let i = n - 1;
    let j = 0;
    let num = 0;
    while (i >= 0 && j < n) {
        if (matrix[i][j] <= mid) { // 确认小于mid的个数
            num += i + 1;
            j++;
        } else {
            i--;
        }
    }
    return num >= k;
}

const matrix = [
    [ 1,  5,  9],
    [10, 11, 13],
    [12, 13, 15]
 ],
 k = 8;
 console.log(kthSmallest(matrix, k));