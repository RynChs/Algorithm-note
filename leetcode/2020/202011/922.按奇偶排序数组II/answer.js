/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    const swap = (i, j) => {
        const temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    }
    let j = 1;
    for (let i = 0; i < A.length; i += 2) {
        if (A[i] & 1) {
            while (A[j] & 1) {
                j += 2;
            }
            swap(i, j);
        }
    }
    return A;
};

console.log(sortArrayByParityII([1,2,3,4]));