/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let ret = 0;
    for (const ch of s) {
        ret ^= ch.charCodeAt();
    }
    for (const ch of t) {
        ret ^= ch.charCodeAt();
    }
    return String.fromCharCode(ret);
};