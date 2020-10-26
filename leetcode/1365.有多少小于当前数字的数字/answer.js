/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let counts = new Array(101).fill(0);
    for(let num of nums) {
        counts[num] += 1;
    }
    for(let i = 1; i < 101; i++) {
        counts[i] += counts[i - 1];
    }
    let res = [];
    for(let num of nums) {
        res.push(counts[num - 1] || 0);
    }
    return res;
};