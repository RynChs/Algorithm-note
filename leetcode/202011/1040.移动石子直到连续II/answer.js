/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function(stones) {
    stones.sort((a, b) => a - b);
    let n = stones.length;
    let min = n;
    for (let i = 0, j = 0; j < n; j++) {
        // 当前窗口大于n
        while (stones[j] - stones[i] + 1 > n) i++;
        // 当前窗口石子个数
        const count = j - i + 1;
        // 前n-1个石子连续，最后一个不连续，需要移动两次
        if (count === n - 1 && stones[j] - stones[i] + 1 === n - 1) {
            min = Math.min(min, 2);
        } else {
            min = Math.min(min, n - count);
        }
    }
    return [
        min,
        Math.max(stones[n-1]-stones[1]-n+2, stones[n-2]-stones[0]-n+2)
    ]
};

console.log(numMovesStonesII([7,4,9]));
console.log(numMovesStonesII([6,5,4,3,10]));
console.log(numMovesStonesII([100,101,104,102,103]));