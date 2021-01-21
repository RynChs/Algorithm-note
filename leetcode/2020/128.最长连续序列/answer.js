/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums || !nums.length) {
        return null;
    }
    let maxLen = 0;
    nums = Array.from(new Set(nums));
    nums.sort((a, b) => a - b);
    let currLen = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            currLen++;
        } else {
            maxLen = Math.max(maxLen, currLen);
            currLen = 1;
        }
    }
    return maxLen;
};

var BetterLongestConsecutive = function(nums) {
    nums = new Set(nums);
    let maxLen = 0;
    for (const num of nums) {
        if (!nums.has(num - 1)) {
            let currNum = num;
            let currLen = 1;
            while (nums.has(currNum + 1)) {
                currNum++;
                currLen++;
            }
            maxLen = Math.max(maxLen, currLen);
        }
    }
    return maxLen;
};

const nums = [100, 4, 200, 1, 3, 2];
console.log(BetterLongestConsecutive(nums));
