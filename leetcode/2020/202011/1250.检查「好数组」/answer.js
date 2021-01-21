/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function(nums) {
    // 最大公约数
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b);
    }
    let res = nums[0];
    for (const num of nums) {
        res = gcd(res, num);
    }
    return res === 1;
};

console.log(isGoodArray([12,5,7,23]));
console.log(isGoodArray([29,6,10]));
console.log(isGoodArray([3,6]));
