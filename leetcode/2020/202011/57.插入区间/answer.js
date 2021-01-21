/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let left = newInterval[0];
    let right = newInterval[1];
    let flag = false; // 是否有交集
    const res = [];
    for (const interval of intervals) {
        if (interval[0] > right) {
            // 右侧无交集
            if (!flag) {
                res.push([left, right]);
                flag = true;
            }
            res.push(interval);
        } else if (interval[1] < left) {
            // 左侧无交集
            res.push(interval);
        } else {
            // 有交集
            left = Math.min(left, interval[0]);
            right = Math.max(right, interval[1]);
        }
    }
    if (!flag) {
        res.push([left, right]);
    }
    return res;
};

console.log(insert(
    [[1,3],[6,9]],
    [2,5]
));

console.log(insert(
    [[1,2],[3,5],[6,7],[8,10],[12,16]],
    [4,8]
));