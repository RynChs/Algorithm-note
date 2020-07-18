/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let len1 = s1.length;
    let len2 = s2.length;
    let len3 = s3.length;
    if (len1 + len2 !== len3) return false;
    let dp = new Array(len2 + 1);
    dp[0] = true;
    for (let i = 0; i <= len1; i++) {
        for (let j = 0; j <= len2; j++) {
            let p = i + j - 1;
            if (i > 0) {
                dp[j] = dp[j] && s1[i - 1] === s3[p];
            }
            if (j > 0) {
                dp[j] = dp[j] || (dp[j - 1] && s2[j - 1] === s3[p])
            }
        }
    }
    return dp[len2];
};