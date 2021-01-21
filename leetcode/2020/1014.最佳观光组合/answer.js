/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    let max = A[0];
    let ans = 0;
    for (let j = 1; j < A.length; j++) {
        ans = Math.max(ans, max + A[j] - j);
        max = Math.max(max, A[j] + j);
    }
    return ans;
};

const A = [8,1,5,2,6];
console.log(maxScoreSightseeingPair(A));