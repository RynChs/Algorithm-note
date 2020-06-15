/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0] || '';
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (; j < prefix.length && j < strs[i].length; j++) {
            if (prefix[j] !== strs[i][j]) {
                break;
            }
        }
        prefix = prefix.substring(0, j);
    }
    return prefix;
};

const strs1 = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs1));

const strs2 = ["aa","a"];
console.log(longestCommonPrefix(strs2));