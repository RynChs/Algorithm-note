/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let stack = [0];
    let ans = new Array(T.length).fill(0);
    for (let i = 1; i < T.length; i++) {
        let lastIndex = stack[stack.length - 1];
        while (T[i] > T[lastIndex]) {
            ans[lastIndex] = i - lastIndex;
            stack.pop();
            lastIndex = stack[stack.length - 1];
        }
        stack.push(i);
    }
    return ans;
};

const T = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(T));