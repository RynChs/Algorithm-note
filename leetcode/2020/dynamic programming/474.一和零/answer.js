/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const map = {};
    for (const str of strs) {
        let zeros = 0, ones = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '0') {
                zeros++;
            } else {
                ones++;
            }
        }
        map[str] = [zeros, ones];
    }

    const dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));

    for (let i = 0; i < strs.length; i++) {
        const [ zeros, ones ] = map[strs[i]];
        for (let j = m; j >= zeros; j--) {
            for (let k = n; k >= ones; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1);
            }
        }
    }
    return dp[m][n];
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));