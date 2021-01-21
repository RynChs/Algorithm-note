/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    let n = A.length;
    if (n === 0) return 0;
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        if (A[i] > A[i - 1]) left[i] = left[i - 1] + 1;
    }
    for (let i = A.length - 1; i >= 0; i--) {
        if (A[i] > A[i + 1]) right[i] = right[i + 1] + 1;
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (left[i] && right[i]) {
            res = Math.max(res, left[i] + right[i] + 1);
        }
    }
    return res;
};

console.log(longestMountain([2,1,4,7,3,2,5]));
console.log(longestMountain([2,2,2]));