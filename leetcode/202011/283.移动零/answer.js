/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const swap = (i, j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    let left = 0, right = 0;
    while (right < nums.length) {
        if (nums[right] !== 0) {
            swap(left, right);
            left++;
        }
        right++;
    }
};

console.log(moveZeroes([0,1,0,3,12]));