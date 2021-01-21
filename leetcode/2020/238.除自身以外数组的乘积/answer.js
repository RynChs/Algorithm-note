/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 计算每个下标的左右乘积再相乘
var productExceptSelf = function(nums) {
    if (!nums || nums.length === 0) {
        return null;
    }
    let length = nums.length;
    let left = Array.from({ length }, () => 1);
    let right = Array.from({ length }, () => 1);
    for (let i = 1; i < length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }
    for (let j = length - 2; j >= 0; j--) {
        right[j] = nums[j + 1] * right[j + 1];
    }
    let ans = [];
    for (let i = 0; i < length; i++) {
        ans.push(left[i] * right[i]);
    }
    return ans;
};

// 更优解
var betterProductExceptSelf = function(nums) {
    if (!nums || nums.length === 0) {
        return null;
    }
    let length = nums.length;
    let ans = Array.from({ length }, () => 1);
    for (let i = 1; i < length; i++) {
        ans[i] = nums[i - 1] * ans[i - 1];
    }
    let right = 1;
    for (let j = length - 1; j >= 0; j--) {
        ans[j] = ans[j] * right;
        right *= nums[j];
    }
    return ans;
};

const nums = [1,2,3,4];
console.log(betterProductExceptSelf(nums));