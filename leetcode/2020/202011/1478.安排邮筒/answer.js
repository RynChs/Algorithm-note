/**
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
var minDistance = function(houses, k) {
    houses.sort((a, b) => a - b);
    const n = houses.length;
    // 从第 i 个数到第 j 个数使用一个邮箱最短的距离，中位数
    const dis = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const mid = (i + j) >> 1;
            for (let d = i;  d <= j; d++) {
                dis[i][j] += Math.abs(houses[mid] - houses[d]);
            }
        }
    }

    // i 个数，j 个邮局的最小划分
    const dp = Array.from({ length: n }, () => Array.from({ length: k + 1 }, () => Number.MAX_SAFE_INTEGER));
    // 一个邮局的情况
    for (let i = 0; i < n; i++) {
        dp[i][1] = dis[0][i];
    }
    for (let i = 0; i < n; i++) {
        for (let j = 2; j <= Math.min(i + 1, k); j++) {
            for (let d = j - 1; d <= i; d++) {
                dp[i][j] = Math.min(dp[i][j], dp[d - 1][j - 1] + dis[d][i]);
            }
        }
    }
    return dp[n - 1][k];
};

console.log(minDistance([1,4,8,10,20], 3));
console.log(minDistance([2,3,5,12,18], 2));
console.log(minDistance([7,4,6,1], 1));
console.log(minDistance([3,6,14,10], 4));