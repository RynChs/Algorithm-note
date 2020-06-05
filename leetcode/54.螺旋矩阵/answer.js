/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 一层层缩进
var spiralOrder = function(matrix) {
    let ans = [];
    if (!matrix || !matrix.length || !matrix[0].length) {
        return ans;
    }
    let row = matrix.length;
    let col = matrix[0].length;
    let left = 0;
    let right = col - 1;
    let top = 0;
    let bottom = row - 1;
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i]);
        }
        for (let i = top + 1; i <= bottom; i++) {
            ans.push(matrix[i][right]);
        }
        if (left < right && top < bottom) {
            for (let i = right - 1; i >= left; i--) {
                ans.push(matrix[bottom][i]);
            }
            for (let i = bottom - 1; i > top; i--) {
                ans.push(matrix[i][left]);
            }
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    return ans;
};

const matrix1 = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];
console.log(spiralOrder(matrix1));

const matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
];
console.log(spiralOrder(matrix2));

