/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let ans = Number.MAX_SAFE_INTEGER;
    if (!nums || nums.length === 0) return 0;
    let start = 0;
    let end = 0;
    let sum = 0;
    while (end < nums.length) {
        sum += nums[end];
        while (sum >= s) {
            ans = Math.min(ans, end - start + 1);
            sum -= nums[start];
            start++;
        }
        end++;
    }
    return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
};

const s = 7, nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(s, nums));