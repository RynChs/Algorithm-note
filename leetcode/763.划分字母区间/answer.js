/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const codePointA = 'a'.codePointAt(0);
    let lastIndex = new Array(26); // 每个字母的最后位置
    for (let i = 0; i < S.length; i++) {
        lastIndex[S.codePointAt(i) - codePointA] = i;
    }
    let res = [];
    let start = 0, end = 0;
    for (let i = 0; i < S.length; i++) {
        end = Math.max(end, lastIndex[S.codePointAt(i) - codePointA]);
        if (i === end) {
            res.push(end - start + 1);
            start = end + 1;
        }
    }
    return res;
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));