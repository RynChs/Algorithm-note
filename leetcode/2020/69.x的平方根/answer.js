/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let L = 0;
    let R = x;
    let ans = -1;
    while (L <= R) {
        let mid = L + parseInt((R - L) / 2);
        if (mid * mid <= x) {
            ans = mid;
            L = mid + 1;
        } else {
            R = mid - 1;
        }
    }
    return ans;
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(9));
