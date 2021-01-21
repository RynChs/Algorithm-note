/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const n = arr.length;
    const pre = new Array(n + 1).fill(0);
    for (let i = 1; i < n + 1; i++) {
        pre[i] = pre[i - 1] ^ arr[i - 1];
    }

    const res = [];
    for (const item of queries) {
        res.push(pre[item[0]] ^ pre[item[1] + 1]);
    }
    return res;
};

console.log(xorQueries([1,3,4,8], [[0,1],[1,2],[0,3],[3,3]]));