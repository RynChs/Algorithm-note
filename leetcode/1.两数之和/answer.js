/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length < 2) return [];
    let map = {};
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map[nums[i]] === undefined) {
            map[diff] = i;
        } else {
            ans = [map[nums[i]], i];
            break;
        }
    }
    return ans;
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));