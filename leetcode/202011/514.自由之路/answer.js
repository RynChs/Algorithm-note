/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    const n = ring.length, m = key.length;

    const charCode = (char) => char.charCodeAt() - 'a'.charCodeAt();
    const pos = Array.from({ length: 26 }, () => []);
    for (let i = 0; i < n; i++) {
        pos[charCode(ring[i])].push(i);
    }

    const dp = Array.from(
        { length: m },
        () => Array.from({ length: n }, () => Number.MAX_SAFE_INTEGER)
    );
    // key的第一个字符
    for (const item of pos[charCode(key[0])]) {
        dp[0][item] = Math.min(item, n - item) + 1;
    }
    // 剩下的字符
    for (let i = 1; i < m; i++) {
        for (const j of pos[charCode(key[i])]) {
            for (const k of pos[charCode(key[i - 1])]) {
                dp[i][j] = Math.min(
                    dp[i][j],
                    dp[i - 1][k] + Math.min(Math.abs(j - k), n - Math.abs(j - k)) + 1
                )
            }
        }
    }

    return dp[m - 1].reduce((pre, cur) => Math.min(pre, cur), Number.MAX_SAFE_INTEGER);
};

console.log(findRotateSteps("godding", "gd"));