/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    const dfs = (cur, temp) => {
        // 长度小于k，不可能符合条件
        if (temp.length + (n - cur + 1) < k) {
            return;
        }
        // 长度相等时记录下
        if (temp.length === k) {
            res.push(temp);
            return;
        }
        // 取当前位置
        dfs(cur + 1, [...temp, cur]);
        // 不取当前位置
        dfs(cur + 1, temp);
    }
    dfs(1, []);
    return res;
};

console.log(combine(4, 2));