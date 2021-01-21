/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    const dfs = (sum, start, temp) => {
        if (sum > target) {
            return;
        } else if (sum === target) {
            res.push(temp.slice());
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i - 1] === candidates[i] && i - 1 >= start) {
                continue;
            }
            temp.push(candidates[i]);
            dfs(sum + candidates[i], i + 1, temp);
            temp.pop();
        }
    }
    dfs(0, 0, []);
    return res;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8));
console.log(combinationSum2([2,5,2,1,2], 5));
