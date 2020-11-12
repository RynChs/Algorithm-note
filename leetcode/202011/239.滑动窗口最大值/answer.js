/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (k === 1) return nums;

    const n = nums.length;
    let left = new Array(n);
    left[0] = nums[0];
    let right = new Array(n);
    right[n - 1] = nums[n - 1];
    for (let i = 1; i < n; i++) {
        // 从左往右
        if (i % k === 0) {
            left[i] = nums[i];
        } else {
            left[i] = Math.max(left[i - 1], nums[i]);
        }
        // 从右往左
        const j = n - i - 1;
        if ((j + 1) % k === 0) {
            right[j] = nums[j];
        } else {
            right[j] = Math.max(right[j + 1], nums[j]);
        }
    }

    const maxs = new Array(n - k + 1);
    for (let i = 0; i < n - k + 1; i++) {
        // 左侧和右侧比较
        maxs[i] = Math.max(left[i + k - 1], right[i]);
    }
    return maxs;
};

console.log(maxSlidingWindow([1,3,-1, -3,5,3, 6,7], 3));
console.log(maxSlidingWindow([1,-1], 1));