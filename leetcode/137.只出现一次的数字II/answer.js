/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let one = 0;
    let twice = 0;
    for (const num of nums) {
        one = ~twice & (one ^ num);
        twice = ~one & (twice ^ num);
    }
    return one;
};

const nums1 = [2,2,3,2];
console.log(singleNumber(nums1));
console.log();

const nums2 = [0,1,0,1,0,1,99];
console.log(singleNumber(nums2));
console.log();

