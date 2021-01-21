/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    const dfs = (sum, cur, temp) => {
        if (cur === candidates.length) {
            return;
        }
        if (sum === 0) {
            res.push(temp);
            return;
        }
        // 不选当前数
        dfs(sum, cur + 1, temp);
        // 选当前数
        if (sum - candidates[cur] >= 0) {
            dfs(sum - candidates[cur], cur, [...temp, candidates[cur]]);
        }
    }
    dfs(target, 0, []);
    return res;
};

console.log(combinationSum([2,3,6,7], 7));
console.log(combinationSum([2,3,5], 8));