/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const max = Math.pow(2, 31) - 1;
    const min = Math.pow(-2, 31);
    let str = parseInt(s);
    if (isNaN(str)) return 0;
    if (Number(str) > max) return max;
    if (Number(str) < min) return min;
    return Number(str);
};

console.log(myAtoi('42'));
console.log(myAtoi('   -42'));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));