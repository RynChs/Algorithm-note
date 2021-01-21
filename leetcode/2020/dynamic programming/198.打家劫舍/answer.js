/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || nums.length === 0) {
        return null;
    }
    if (nums.length === 1) {
        return nums[0]
    }
    let first = nums[0];
    let second = Math.max(nums[1], nums[0]);
    for (let i = 2; i < nums.length; i++) {
        let temp = second;
        second = Math.max(nums[i] + first, second);
        first = temp;
    }
    return second;
};

const nums1 = [1,2,3,1];
console.log(rob(nums1));

const nums2 = [2,7,9,3,1];
console.log(rob(nums2));
