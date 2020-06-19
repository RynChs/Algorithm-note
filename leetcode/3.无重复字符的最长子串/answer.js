/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let max = 0;
    let mixIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            mixIndex = Math.max(map.get(s[i]) + 1, mixIndex);
        }
        max = Math.max(max, i - mixIndex + 1);
        map.set(s[i], i);
        console.log(map);
    }
    return max;
};

const s1 = "abcabcbb";
console.log(lengthOfLongestSubstring(s1));

const s2 = "bbbbb";
console.log(lengthOfLongestSubstring(s2));

const s3 = "pwwkew";
console.log(lengthOfLongestSubstring(s3));