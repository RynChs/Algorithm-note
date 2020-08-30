/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const reverse_s = s.split(' ').reverse();
    let res = '';
    for (const item of reverse_s) {
        res = item.split('').reverse().join('') + (res ? ' ' : '') + res;
    }
    return res;
};

console.log(reverseWords("Let's take LeetCode contest"));