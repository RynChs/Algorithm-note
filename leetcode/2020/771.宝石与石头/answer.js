/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const map = {};
    for (let i = 0; i < S.length; i++) {
        if (map[S[i]]) {
            map[S[i]] = map[S[i]] + 1;
        } else {
            map[S[i]] = 1;
        }
    }
    let res = 0;
    for (let i = 0; i < J.length; i++) {
        if (map[J[i]]) {
            res += map[J[i]];
        }
    }
    return res;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));