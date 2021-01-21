/**
 * @param {string} s
 * @return {string}
 */
var DplongestPalindrome = function(s) {
    let len = s.length;
    let dp = new Array(len).fill(new Array(len).fill(false));
    let res = '';
    for (let l = 0; l < len; l++) {
        dp = JSON.parse(JSON.stringify(dp));
        for (let i = 0; i + l < len; i++) {
            let j = i + l;
            if (l === 0) {
                dp[i][j] = true;
            } else if (l === 1) {
                dp[i][j] = (s[i] === s[j]);
            } else {
                dp[i][j] = (s[i] === s[j] && dp[i + 1][j - 1]);
            }
            if (dp[i][j] && (l + 1 > res.length)) {
                res = s.substring(i, j + 1);
            }
        }
    }
    return res;
};

// 中心扩展法
var longestPalindrome = function(s) {
    if (!s || s.length < 2) {
        return s;
    }
    let start = 0, end = 0;
    let n = s.length;
    // 中心扩展
    let centerExpend = (left,right) => {
        while(left >= 0 && right < n && s[left] == s[right]){
            left--;
            right++;
        }
        return right - left - 1;
    }
    for(let i = 0;i < n;i++){
        let len1 = centerExpend(i, i);
        let len2 = centerExpend(i, i + 1);
        let maxLen = Math.max(len1,len2);
        if(maxLen > end - start){
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }
    return s.substring(start, end + 1);
};

const str1 = "abcba";
console.log(longestPalindrome(str1));

const str2 = "cbbd";
console.log(longestPalindrome(str2));