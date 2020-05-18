/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let imax = 1;
    let imin = 1;
    for(let num of nums) {
        if (num < 0) {
            [imax, imin] = [imin, imax]; // 越负越大
        }
        imax = Math.max(num, num * imax);
        imin = Math.min(num, num * imin);
        max = Math.max(imax, max);
    }
    return max;
};

const arr1 = [6,-1,2,4];
console.log(maxProduct(arr1));

const arr2 = [-2,0,-1];
console.log(maxProduct(arr2));