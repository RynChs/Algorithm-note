/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const n = grid.length;
    const memo = Array.from({ length: n }, () => Array.from({ length: n }, () => Array.from({ length: n }, () => Number.MIN_SAFE_INTEGER)));
    const dp = (r1, c1, c2) => {
        const r2 = r1 + c1 - c2;
        if (r1 === n || c1 === n || r2 === n || c2 === n || grid[r1][c1] === -1 || grid[r2][c2] === -1) {
            return Number.MIN_SAFE_INTEGER;
        } else if (r1 === n - 1 && c1 === n - 1) {
            return grid[r1][c1];
        } else if (memo[r1][c1][c2] !== Number.MIN_SAFE_INTEGER) {
            return memo[r1][c1][c2];
        } else {
            let ans = grid[r1][c1];
            if (c1 !== c2) ans += grid[r2][c2];
            ans += Math.max(
                Math.max(dp(r1+1, c1, c2), dp(r1, c1+1, c2)),
                Math.max(dp(r1+1, c1, c2+1), dp(r1, c1+1, c2+1)),
            )
            memo[r1][c1][c2] = ans;
            return ans;
        }
    }
    return Math.max(0, dp(0, 0, 0));
};

console.log(cherryPickup(
    [
        [1,1,1,0,0],
        [0,0,1,0,0],
        [1,0,1,0,1],
        [0,0,1,0,0],
        [0,0,1,1,1],
    ]
));