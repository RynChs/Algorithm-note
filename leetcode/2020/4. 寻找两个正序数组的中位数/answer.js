/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums = [...nums1, ...nums2].sort((a, b) => a - b);
    if (nums.length % 2 === 0) {
        return (nums[Math.floor(nums.length / 2)] + nums[Math.floor(nums.length / 2) - 1]) / 2;
    } else {
        return nums[Math.floor(nums.length / 2)];
    }
};

const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4));