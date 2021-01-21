/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let res;
    for (const num of nums) {
        res ^= num;
    }
    const diff = res & (-res);
    let x;
    for (const num of nums) {
        if ((num & diff) !== 0) {
            x ^= num;
        }
    }
    return [x, res^x];
};

const nums = [1,2,1,3,2,5];
console.log(singleNumber(nums));