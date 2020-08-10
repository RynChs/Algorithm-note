/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let ptr = 0, n = s.length, last = 0, ans = 0;
    while (ptr < n) {
        const str = s[ptr];
        let count = 0;
        while (ptr < n && s[ptr] === str) {
            ++ptr;
            ++count;
        }
        ans += Math.min(count, last);
        last = count;
    }
    return ans;
};