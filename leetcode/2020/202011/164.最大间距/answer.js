/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length < 2) return 0;
    nums.sort((a, b) => a - b);
    let ans = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < nums.length; i++) {
        ans = Math.max(ans, nums[i] - nums[i - 1]);
    }
    return ans;
};

console.log(maximumGap([3,6,9,1]));
console.log(maximumGap([10]));