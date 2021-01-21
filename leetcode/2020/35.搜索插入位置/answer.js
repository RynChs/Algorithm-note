/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let ans = nums.length;
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const mid = ((right - left) >>> 1) + left;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};