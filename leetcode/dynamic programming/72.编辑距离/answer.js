/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;

    if (n * m === 0) {
        return n + m; // 其中一个字符为空
    }

    let dp = Array.from({ length: n + 1 }, () => Array.from({length: m + 1}, () => 0));
    // 预设只操作一个字母时需要的次数
    for (let i = 0; i < n + 1; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j < m + 1; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {
            // 转换步骤至少 +1
            let left_up = dp[i - 1][j - 1];
            let left = dp[i][j - 1] + 1;
            let up = dp[i - 1][j] + 1;
            if (word1[i - 1] !== word2[j - 1]) {
                left_up += 1;
            }
            // 三者最小操作数
            dp[i][j] = Math.min(left_up, Math.min(left, up));
        }
    }
    return dp[n][m];
};

const word1 = "horse", word2 = "ros";
console.log(minDistance(word1, word2));

const word3 = "intention", word4 = "execution";
console.log(minDistance(word3, word4));