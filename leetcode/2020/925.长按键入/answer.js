/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let i = 0;
    let j = 0;
    while (j < typed.length) {
        if (i < name.length && name[i] === typed[j]) {
            i++;
            j++;
        } else if (j > 0 && typed[j - 1] === typed[j]) {
            j++;
        } else {
            return false;
        }
    }
    return i === name.length;
};

console.log(isLongPressedName("alex", "alexer"));
console.log(isLongPressedName("saeed", "ssaaedd"));
console.log(isLongPressedName("leelee", "lleeelee"));
console.log(isLongPressedName("laiden", "laiden"));