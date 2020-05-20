/**
 * @param {string} s
 * @return {number}
 */
// 暴力法
var badFindTheLongestSubstring = function(s) {
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        const count = [0, 0, 0, 0, 0];
        for (let j = i; j < s.length; j++) {
            const str = s.charAt(j);
            const index = 'aeiou'.indexOf(str);
            if (index > -1) {
                count[index]++;
            }
            const arr = count.filter(item => item % 2 === 0)
            if (arr.length === 5) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }        
    }
    return maxLength;
};

// 前缀和 + 状态压缩
var findTheLongestSubstring = function(s) {
    const n = s.length;
    const pos = new Array(1 << 5).fill(-1);
    let ans = 0, status = 0;
    pos[0] = 0;
    for (let i = 0; i < n; ++i) {
        const ch = s.charAt(i);
        if (ch === 'a') {
            status ^= 1<<0;
        } else if (ch === 'e') {
            status ^= 1<<1;
        } else if (ch === 'i') {
            status ^= 1<<2;
        } else if (ch === 'o') {
            status ^= 1<<3;
        } else if (ch === 'u') {
            status ^= 1<<4;
        }
        if (~pos[status]) {
            ans = Math.max(ans, i + 1 - pos[status]);
        } else {
            pos[status] = i + 1;
        }
    }
    return ans;
};

const str1 = "eleetminicoworoep";
console.log(findTheLongestSubstring(str1));

const str2 = "leetcodeisgreat";
console.log(findTheLongestSubstring(str2));

const str3 = "bcbcbc";
console.log(findTheLongestSubstring(str3));