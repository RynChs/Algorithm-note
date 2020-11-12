/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    // 棋盘
    const checkerboard = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => false));
    for (const [i, j] of queens) {
        checkerboard[i][j] = true;
    }
    // 八个方向
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, 1], [-1, 1], [1, -1]];
    const res = [];
    for (const [i, j] of directions) {
        // 找到每个方向上的第一个皇后
        for (let x = king[0], y = king[1]; x >= 0 && y >= 0 && x <= 7 && y <= 7; x += i, y += j) {
            if (checkerboard[x][y]) {
                res.push([x, y]);
                break;
            }
        }
    }
    return res;
};

console.log(queensAttacktheKing(
    [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]],
    [0,0]
));

console.log(queensAttacktheKing(
    [[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]], 
    [3,3]
));

console.log(queensAttacktheKing(
    [[5,6],[7,7],[2,1],[0,7],[1,6],[5,1],[3,7],[0,3],[4,0],[1,2],[6,3],[5,0],[0,4],[2,2],[1,1],[6,4],[5,4],[0,0],[2,6],[4,5],[5,2],[1,4],[7,5],[2,3],[0,5],[4,2],[1,0],[2,7],[0,1],[4,6],[6,1],[0,6],[4,3],[1,7]], 
    [3,4]
));