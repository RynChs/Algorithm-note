/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let count = 0;
    let left = 0, right = k - 1;
    let sum = 0;
    for (let i = 0; i <= right; i++) {
        sum += arr[i];
    }
    while (right < arr.length) {
        if ((sum / k) >= threshold) {
            count++;
        }
        sum = sum - arr[left] + arr[right + 1];
        left++;
        right++;
    }
    return count;
};

console.log(numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4));
console.log(numOfSubarrays([1,1,1,1,1], 1, 0));
console.log(numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5));
console.log(numOfSubarrays([7,7,7,7,7,7,7], 7, 7));
console.log(numOfSubarrays([4,4,4,4], 4, 1));