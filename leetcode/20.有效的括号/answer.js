/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let bool = true;
    if (s[0] === ")" || s[0] === "}" || s[0] === "]") {
        bool = false;
    } else {
        let arr = new Array();
        let index = 0;
        let param = {
            "(": ")",
            "{": "}",
            "[": "]"
        }
        for (let i = 0; i < s.length; i++) {
            if (index > 0 && param[arr[index - 1]] === s[i]) {
                arr.pop();
                index--;
            } else {
                arr.push(s[i]);
                index++;
            }
        }
        arr.length !== 0 && (bool = false);
    }
    return bool;
};