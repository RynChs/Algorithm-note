/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const countBits = (num) => {
        let count = 0;
        while (num !== 0) {
            count += num & 1;
            num = num >> 1;
        }
        return count;
    }
    return arr.sort((a, b) => (countBits(a) - countBits(b)) || (a - b));
};

console.log(sortByBits([0,1,2,3,4,5,6,7,8]));
console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1]));
console.log(sortByBits([10000,10000]));
console.log(sortByBits([2,3,5,7,11,13,17,19]));
console.log(sortByBits([10,100,1000,10000]));