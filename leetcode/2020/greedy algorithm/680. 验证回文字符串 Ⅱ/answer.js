/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let firstIndex = 0;
    let lastIndex = s.length - 1;
    while(firstIndex < lastIndex) {
        if (s[firstIndex] === s[lastIndex]) {
            firstIndex++;
            lastIndex--;
        } else {
            let flag1 = true;
            let flag2 = true;
            for (let i = firstIndex + 1, j = lastIndex; i < j; i++, j--) {
                if (s[i] !== s[j]) {
                    flag1 = false;
                    break;
                }                
            }
            for (let i = firstIndex, j = lastIndex - 1; i < j; i++, j--) {
                if (s[i] !== s[j]) {
                    flag2 = false;
                    break;
                }                
            }
            return flag1 || flag2;
        }
    }
    return true;
};

// const str1 = 'aba';
// console.log(validPalindrome(str1));

// const str2 = 'abca';
// console.log(validPalindrome(str2));

const str3 = "cupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucu";
console.log(validPalindrome(str3));