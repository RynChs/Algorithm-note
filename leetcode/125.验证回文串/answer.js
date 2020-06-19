/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLocaleLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};

const s1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s1));

const s2 = "0P";
console.log(isPalindrome(s2));