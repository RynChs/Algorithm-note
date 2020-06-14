/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    if (arr.length === 1) return arr[0];
    let num = Math.floor(target / (arr.length));
    while (compare(arr, num, num + 1, target) > num) {
        num = compare(arr, num, num + 1, target);
    }
    return num;
};

// 比较两个值哪个更接近 target
function compare(arr, num1, num2, target) {
    let sum1 = 0;
    let sum2 = 0;
    for (const item of arr) {
        sum1 += item > num1 ? num1 : item;
        sum2 += item > num2 ? num2 : item;
    }
    return Math.abs(target - sum1) > Math.abs(target - sum2) ? num2 : num1; 
}

const arr1 = [4,9,3];
const target1 = 10;
console.log(findBestValue(arr1, target1));

const arr2 = [2,3,5];
const target2 = 10;
console.log(findBestValue(arr2, target2));

const arr3 = [60864,25176,27249,21296,20204];
const target3 = 56803;
console.log(findBestValue(arr3, target3));