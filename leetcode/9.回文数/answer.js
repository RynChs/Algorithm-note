/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();
    return str === str.split('').reverse().join('');
};

const num = -121;
console.log(isPalindrome(num));