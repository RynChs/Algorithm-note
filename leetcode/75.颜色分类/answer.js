/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let n = nums.length;
    let p0 = 0, p1 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            let temp = nums[i];
            nums[i] = nums[p0],
            nums[p0] = temp;
            if (p0 < p1) {
                temp = nums[i];
                nums[i] = nums[p1],
                nums[p1] = temp;
            }
            p0++;
            p1++;
        } else if (nums[i] === 1) {
            const temp = nums[i];
            nums[i] = nums[p1],
            nums[p1] = temp;
            p1++;
        }
    }
    return nums;
};

console.log(sortColors([2,0,2,1,1,0]));