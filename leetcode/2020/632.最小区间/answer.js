/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    let allNums = [];
    let map = {};
    for (let i = 0; i < nums.length; i++) {
      map[i] = 0;          // 初始化出现次数
      for (let j = 0; j < nums[i].length; j++) {
        allNums.push({
          num: nums[i][j], // 数值本身
          type: i          // 来源于哪个数组
        });
      }
    }
    allNums.sort((a, b) => a.num - b.num);
    let left = 0;
    let count = 0;
    let minLen = Infinity;
    let minStart = 0;
    for (let right = 0; right < allNums.length; right++) { // 主旋律定为扩张
      if (map[allNums[right].type] == 0) count++;          // 纳入了之前没纳入的目标数字，count++
      map[allNums[right].type]++;                          // 纳入数字，对应的出现次数+1
      while (count == nums.length && left <= right) { // 找齐所有目标数字，且区间不被破坏的前提下收缩
        if (allNums[right].num - allNums[left].num < minLen) { // 出现了比minLen更小的解
          minLen = allNums[right].num - allNums[left].num;     // 更新minLen
          minStart = allNums[left].num;                        // 更新minStart
        }
        map[allNums[left].type]--;                 // 收缩之前更新一下map
        if (map[allNums[left].type] == 0) count--; // map对应的数字出现次数减为0，count--
        left++;                                    // 收缩窗口
      }
    }
    return [minStart, minStart + minLen];
};

console.log(smallestRange([
    [4,10,15,24,26],
    [0,9,12,20],
    [5,18,22,30]
]));