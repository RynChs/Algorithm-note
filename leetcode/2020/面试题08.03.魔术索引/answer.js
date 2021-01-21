/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
    let ans = -1;
    for(let i = 0; i < nums.length; i++) {
        if (i === nums[i]) {
            ans = i;
            break;
        }
    }
    return ans;
};