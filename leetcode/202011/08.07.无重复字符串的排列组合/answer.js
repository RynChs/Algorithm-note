/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
    const n = S.length;
    const str = S.split('');
    const res = [];
    const dfs = (k) => {
        if (k === n) {
            res.push(str.join(''));
            return;
        }
        for (let i = k; i < n; i++) {
            [str[i], str[k]] = [str[k], str[i]];
            dfs(k + 1);
            [str[i], str[k]] = [str[k], str[i]];
        }
    }
    dfs(0);
    return res;
};

console.log(permutation("qwe"));
console.log(permutation("ab"));
