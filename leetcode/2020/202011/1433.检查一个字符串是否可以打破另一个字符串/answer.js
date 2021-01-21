/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
    s1 = s1.split('').sort();
    s2 = s2.split('').sort();
    const check = function(s1, s2) {
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] < s2[i]) return false;
        }
        return true;
    }
    return check(s1, s2) || check(s2, s1);
};