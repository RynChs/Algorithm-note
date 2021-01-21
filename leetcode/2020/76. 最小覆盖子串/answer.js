/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let minLen = Number.MAX_VALUE, resLeft;
    let map = {};
    let missType = 0;
    for (const item of t) {
        if (map[item] === undefined) {
            missType++;
            map[item] = 1;
        } else {
            map[item]++;
        }
    }
    // 双指针
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        let strR = s.charAt(right);
        if (map[strR] !== undefined) map[strR]--;
        if (map[strR] === 0) missType--;
        while (missType === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                resLeft = left;
            }
            let strL = s.charAt(left);
            if (map[strL] !== undefined) map[strL]++;
            if (map[strL] > 0) missType++;
            left++;
        }
    }
    return s.substring(resLeft, resLeft + minLen);
};



const S = 'a';
const T = 'aa';
console.log(minWindow(S, T));