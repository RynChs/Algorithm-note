/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let arr = [0, 1, 1];
    let i = 3;
    while (i <= n) {
        let sum = arr[i - 1] + arr[i - 2] + arr[i - 3];
        arr.push(sum);
        i++;
    }
    return arr[n];
};

console.log(tribonacci(25));