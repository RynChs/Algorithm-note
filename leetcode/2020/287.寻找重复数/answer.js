/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const key = nums[i];
        if (map[key] === undefined) {
            map[key] = 1;
        } else {
            return key;
        }
    }
};

// Floyd判圈算法
var findDuplicateFloyd = function(nums) {
    let slow = 0, fast = 0;
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    slow = 0;
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};

const arr1 = [1,3,4,2,2];
console.log(findDuplicateFloyd(arr1));

const arr2 = [3,1,3,4,2];
console.log(findDuplicateFloyd(arr2));