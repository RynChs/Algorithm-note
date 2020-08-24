/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let n = s.length;
    for (let i = 1; i * 2 <= n; ++i) {
        if (n % i == 0) {
            let match = true;
            for (let j = i; j < n; ++j) {
                if (s.charAt(j) != s.charAt(j - i)) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return true;
            }
        }
    }
    return false;
};