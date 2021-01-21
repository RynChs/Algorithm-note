/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let left = 0, right = s.length - 1 ; left < right; left++, right--) {
        [s[left], s[right]] = [s[right], s[left]];
    }
};