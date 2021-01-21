/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // 交换两元素
    const swap = (l, r) => {
        const temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
    }
    // 反转
    const reverse = (start) => {
        let left = start, right = nums.length - 1;
        while (left < right) {
            swap(left, right);
            left++;
            right--;
        }
    }

    let i = nums.length - 2;
    // 从后往前找到第一个降序的数(较小数)
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i >= 0) {
        // 从后往前找到第一个比较小数大的数(较大数)
        let j = nums.length - 1;
        while (j >= 0 && nums[i] >= nums[j]) {
            j--;
        }
        // 交换较小数和较大数
        swap(i, j);
    }
    // 反转从后往前最升序的区间
    reverse(i + 1);
};

console.log(nextPermutation([1,2,3]));
console.log(nextPermutation([3,2,1]));
console.log(nextPermutation([1,1,5]));