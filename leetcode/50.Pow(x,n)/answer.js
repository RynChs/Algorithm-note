/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 1 / myPow(x, -n);
    }
    if (n % 2) {
        return x * myPow(x, n -1);
    } else {
        return myPow(x*x, n / 2);
    }
};

const x1 = 2.00000, n1 = 10;
console.log(myPow(x1, n1));

const x2 = 2.10000, n2 = 3;
console.log(myPow(x2, n2));

const x3 = 2.00000, n3 = -2147483648;
console.log(myPow(x3, n3));