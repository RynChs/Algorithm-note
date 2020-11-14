/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const map = {};
    for (const item of arr1) {
        map[item] = map[item] + 1 || 1;
    }
    const res = [];
    for (const item of arr2) {
        while (map[item] > 0) {
            res.push(item);
            map[item]--;
        }
    }
    const other = [];
    for (const i in map) {
        while (map[i] > 0) {
            other.push(Number(i));
            map[i]--;
        }
    }
    return [ ...res, ...other.sort((a, b) => a - b) ];
};

console.log(relativeSortArray(
    [2,3,1,3,2,4,6,7,9,2,19],
    [2,1,4,3,9,6]
));