/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumBAD = function(nums) {
    if (!nums || nums.length < 3) {
        return [];
    }
    nums.sort((a, b) => a - b);
    let res = [];
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (map[nums[j]] === undefined) {
                // 如果没有期望的数值，则记录下来
                const hopeNum = -(nums[i] + nums[j]);
                map[hopeNum] = [nums[i], nums[j]];
            } else {
                // 有期望的数值，直接取出
                res.push(map[nums[j]].concat(nums[j]));
                map[nums[j]] = undefined;
            }
        }
    }
    return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 双指针
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    let len = nums.length;
    if (nums[0] <= 0 && nums[len - 1] >= 0) {
        for (let i = 0; i < len - 2; i++) {
            let left = i + 1;
            let right = len - 1;
            while (left < right) {
                if (nums[i] * nums[right] > 0) break;
                const sum = nums[left] + nums[i] + nums[right];
                if (sum === 0) {
                    ans.push([ nums[left], nums[i], nums[right] ]);
                }
                if (sum > 0) {
                    while(nums[right] === nums[--right]) {  };
                } else if (sum <= 0) {
                    while(nums[left] === nums[++left]) {  };
                }
            }
            while(nums[i] === nums[i + 1]) {
                i++;
            }
        }
    }
    return ans;
};

const nums = [-4, -1, -1, 0, 1, 2];
console.log(threeSum(nums));

const nums1 = [0, 0, 0, 0];
console.log(threeSum(nums1));
