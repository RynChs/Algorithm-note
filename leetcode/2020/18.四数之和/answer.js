/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (!nums || nums.length < 4) return [];
    nums.sort((a, b) => a - b);
    let res = [];
    let path=[];
    nums.sort((a, b) => a - b)
    function backtrace(start) {
        if(path.length === 4) {
            if(path[0]+path[1]+path[2]+path[3] === target) {
                res.push([...path]);
            }
            return;
        }
        let r; // 解决同一深度的 重复问题
        for(let i = start; i < nums.length; i++) {
            if(r === nums[i]) continue;
            r = nums[i];
            path.push(nums[i]);
            backtrace(i + 1);
            path.pop();
        }
    }
    backtrace(0);
    return res;
};


console.log(fourSum([ -2, -1, 0, 0, 1, 2 ], 0));