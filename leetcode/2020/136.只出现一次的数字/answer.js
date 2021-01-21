/**
 * @param {number[]} nums
 * @return {number}
 */
// 先排序后遍历
var singleNumberSort = function(nums) {
    nums.sort((a, b) => a - b);
    if (nums[0] !== nums[1]) {
        return nums[0];
    } else if (nums[nums.length - 1] !== nums[nums.length - 2]) {
        return nums[nums.length - 1];
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    for(const num of nums) {
        res ^= num;
        console.log(res);
    }
    return res;
}

const nums1 = [2,2,1];
console.log(singleNumber(nums1));
console.log();

const nums2 = [4,1,2,1,2];
console.log(singleNumber(nums2));
console.log();

const nums3 = [1,1,2,3,3];
console.log(singleNumber(nums3));
console.log();