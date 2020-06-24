/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j >= 0; j--) {
            sum += nums[j];
            if (sum === k) {
                ans++;
            }
        }
    }
    return ans;
};

var betterSubarraySum = function(nums, k) {
    const map = new Map();
    map.set(0, 1);
    let count = 0, pre = 0;
    for (let i = 0; i < nums.length; i++) {
        pre += nums[i];
        if (map.has(pre - k)) {
            count += map.get(pre - k);
        }
        if (map.has(pre)) {
            map.set(pre, map.get(pre) + 1);
        } else  {
            map.set(pre, 1);
        }
    }
    return count;
};

const nums = [3,4,7,2,-3,1,4,2], k = 7;
console.log(betterSubarraySum(nums, k));