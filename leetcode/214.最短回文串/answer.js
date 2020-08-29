/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    const len = s.length;
    const rev_s = s.split('').reverse().join('');
    for (let i = len; i >= 0; i--) {
        if (s.substring(0, i) === rev_s.substring(len - i)) {
            return rev_s.substring(0, len - i) + s;
        }
    }
};

console.log(shortestPalindrome("aacecaaa"));
console.log(shortestPalindrome("abcd"));