/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if (!matrix || !matrix.length) return [];
    let m = matrix.length, n = matrix[0].length;
    let res = [];
    let temp = [];
    for (let i = 0; i < m + n - 1; i++) {
        temp = [];
        let row = i < n ? 0 : i - n + 1;
        let col = i < n ? i : n - 1;
        // 每一组对角线数组
        while (row < m && col > -1) {
            temp.push(matrix[row][col]);
            row++;
            col--;
        }
        if (i % 2 === 0) temp.reverse();
        for (const item of temp) {
            res.push(item);
        }
    }
    return res;
};

console.log(findDiagonalOrder(
    [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ]
    ]
));