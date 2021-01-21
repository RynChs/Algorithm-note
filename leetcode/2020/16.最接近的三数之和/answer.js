/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let min = Number.MAX_SAFE_INTEGER;
    let t = 0;
    while (t < nums.length - 2) {
        let left = t + 1; right = nums.length - 1;
        while (left < right) {
            let sum = nums[t] + nums[left] + nums[right];
            if (Math.abs(min - target) > Math.abs(sum - target)) {
                min = sum;
            }
            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        t++;
    }
    return min;
};

const nums = [-4,-1,1,2], target = 1;
console.log(threeSumClosest(nums, target));