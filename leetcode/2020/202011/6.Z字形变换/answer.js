/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    const len =  Math.min(s.length, numRows);
    const arr = Array.from({ length: len }, () => '');
    let row = 0, col = 0;
    for (let i = 0; i < s.length; i++) {
        if (row < numRows - 1 && (col % (numRows - 1) === 0)) {
            arr[row] += s[i];
            row++;
        } else {
            arr[row] += s[i];
            row--;
            col++;
        }
    }
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
};

console.log(convert('LEETCODEISHIRING', 3));
console.log(convert('LEETCODEISHIRING', 4));
console.log(convert('AB', 2));