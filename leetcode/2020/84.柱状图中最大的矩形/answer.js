/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [];
    let max = 0;
    heights = [0, ...heights, 0];
    for (let i = 0; i < heights.length; i++) {
        while (heights[i] < heights[stack[stack.length - 1]]) {
            const topIndex = stack.pop();
            max = Math.max(max, heights[topIndex] * (i - stack[stack.length - 1] - 1));
        }
        stack.push(i);
    }
    return max;
};

const heights = [2,1,6,5,2,3];
console.log(largestRectangleArea(heights));