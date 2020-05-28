/**
 * @param {string} res
 * @return {string}
 */
// 栈
var decodeString = function(s) {
    let stack = [];
    let num = '';
    const isNumber = (n) => /[0-9]/.test(n);
    for (let i = 0; i < s.length; i++) {
        if (isNumber(s[i])) {
            num += s[i];
        } else if (s[i] === '[') {
            stack.push(num);
            num = '';
        } else if (s[i] === ']') {
            let cur = stack.pop();
            let temp = '';
            while (!Number(cur)) {
                temp = cur + temp;
                cur = stack.pop();
            }
            temp = temp.repeat(Number(cur));
            stack.push(temp);
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};

const s1 = "3[a]2[bc]";
console.log(decodeString(s1));

const s2 = "3[a2[c]]";
console.log(decodeString(s2));

const s3 = "2[abc]3[cd]ef";
console.log(decodeString(s3));
