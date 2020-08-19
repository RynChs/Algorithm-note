/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    const len = s.length;
    const dp = new Array(len).fill(false);

    for (let i = 0; i < len; i++) {
        for (let j = 0; j <= i; j++) {
            if (s[i] === s[j] && (i - j <=1 || dp[j + 1])) {
                dp[j] = true;
                count++;
            } else {
                dp[j] = false;
            }
        }
    }

    return count;
};