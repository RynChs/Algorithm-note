/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const board = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));
    const cols = new Set(); // 列集
    const diag1 = new Set(); // 正对角线集
    const diag2 = new Set(); // 写对角线集
    const res = [];
    
    const helper = (row) => {
        if (row === n) {
            // 有效的记录下来
            const stringsBoard = board.slice();
            for (let i = 0; i < n; i++) {
                stringsBoard[i] = stringsBoard[i].join('');
            }
            res.push(stringsBoard);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) {
                board[row][col] = 'Q'; // 放置皇后
                cols.add(col);
                diag1.add(row + col);
                diag2.add(row - col);
                helper(row + 1);
                board[row][col] = '.'; // 撤销
                cols.delete(col);
                diag1.delete(row + col);
                diag2.delete(row - col);
            }
        }
    }
    helper(0);
    return res;
};

console.log(solveNQueens(4));