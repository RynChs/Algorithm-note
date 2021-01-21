/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const dictionary = new Array();
    const dfs = (k) => {
        if (k > n) return;
        dictionary.push(k);
        for (let i = 0; i <= 9; i++) {
            dfs(k * 10 + i);
        }
    }
    for (let i = 1; i <= 9; i++) {
        dfs(i);
    }
    return dictionary;
};

console.log(lexicalOrder(20));