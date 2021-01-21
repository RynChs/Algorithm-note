/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (!nums || nums.length === 0) return 1;
    nums.sort((a, b) => a - b);
    let min = 1;
    for (const num of nums) {
        if (num > 0 && num === min) {
            min++;
        }
    }
    return min;
};

const nums1 = [0,2,2,1,1];
console.log(firstMissingPositive(nums1));

const nums2 = [3,4,-1,1];
console.log(firstMissingPositive(nums2));

const nums3 = [7,8,9,11,12]
console.log(firstMissingPositive(nums3));