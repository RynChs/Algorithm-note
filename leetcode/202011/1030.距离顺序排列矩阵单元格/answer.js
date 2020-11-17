/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    const map = {};
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            const num = Math.abs(r - r0) + Math.abs(c - c0);
            if (map[num] === undefined) {
                map[num] = [];                
            }
            map[num].push([r, c]);
        }
    }

    let res = [];
    let index = 0;
    while (res.length < R * C) {
        res = [ ...res, ...map[index] ];
        index++;
    }
    return res;
};

console.log(allCellsDistOrder(1, 2, 0, 0));
console.log(allCellsDistOrder(2, 2, 0, 1));
console.log(allCellsDistOrder(2, 3, 1, 2));