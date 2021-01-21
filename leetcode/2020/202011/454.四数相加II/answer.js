/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    const map = new Map();
    let count = 0;
    for (const a of A) {
        for (const b of B) {
            map.set(
                0 - a - b,
                (map.get(0 - a - b) || 0) + 1
            )
        }
    }
    for (const c of C) {
        for (const d of D) {
            if (map.has(c + d)) {
                count += map.get(c + d);
            }
        }
    }
    return count;
};

console.log(fourSumCount(
    [ 1, 2],
    [-2,-1],
    [-1, 2],
    [ 0, 2]
));