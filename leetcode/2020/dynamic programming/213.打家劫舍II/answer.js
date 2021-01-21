/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || nums.length === 0) {
        return null;
    } else if (nums.length === 1) {
        return nums[0]
    } else if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    } else {
        let len = nums.length;
        let first1 = nums[0];
        let second1 = Math.max(nums[1], first1);
        for (let i = 2; i < len - 1; i++) {
            let temp = second1;
            second1 = Math.max(nums[i] + first1, second1);
            first1 = temp;
        }
        let first2 = nums[1];
        let second2 = Math.max(nums[2], first2);
        for (let i = 3; i < len; i++) {
            let temp = second2;
            second2 = Math.max(nums[i] + first2, second2);
            first2 = temp;
        }
        return Math.max(second1, second2);
    }
};

const nums1 = [2,3,2];
console.log(rob(nums1));
console.log();

const nums2 = [1,2,3,1];
console.log(rob(nums2));
