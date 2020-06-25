/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let len = s.length;
    let set = new Set(wordDict);
    let dp = Array.from({ length: len + 1 }, () => false);
    dp[0] = true;
    for (let i = 1; i <= len; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && set.has(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[len];
};

const s1 = "leetcode", wordDict1 = ["leet", "code"];
console.log(wordBreak(s1, wordDict1));

const s2 = "applepenapple", wordDict2 = ["apple", "pen"];
console.log(wordBreak(s2, wordDict2));

const s3 = "catsandog", wordDict3 = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s3, wordDict3));