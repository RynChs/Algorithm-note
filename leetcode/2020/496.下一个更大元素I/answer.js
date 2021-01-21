/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = {};
    for (let i = 0; i < nums2.length; i++) {
        map[nums2[i]] = -1;
        if (stack.length) {
            let topIndex = stack[stack.length - 1];
            while (nums2[i] > nums2[topIndex]) {
                map[nums2[topIndex]] = nums2[i];
                stack.pop();
                topIndex = stack[stack.length - 1];
            }
        }
        stack.push(i);
    }
    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = map[nums1[i]];
    }
    return nums1;
};

const nums1 = [1,3,5,2,4];
const nums2 = [5,4,3,2,1];
console.log(nextGreaterElement(nums1, nums2));
