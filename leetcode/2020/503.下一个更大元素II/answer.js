/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [];
    nums = nums.concat(nums);
    let res = new Array(nums.length).fill(-1);
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            res[stack.pop()] = nums[i];
        }
        stack.push(i);
    }
    return res.slice(0, nums.length / 2);
};

const nums = [1,2,1];
console.log(nextGreaterElements(nums));