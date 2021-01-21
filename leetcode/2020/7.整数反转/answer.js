/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    while (x !== 0) {
        const num = x % 10;
        x = parseInt(x / 10);
        rev = rev * 10 + num;
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) return 0;
    }
    return rev;
};

console.log(reverse(123456789));