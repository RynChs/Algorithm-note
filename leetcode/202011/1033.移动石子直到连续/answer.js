/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    let t;
    if (a > b) { t = a; a = b; b = t }
    if (a > c) { t = a; a = c; c = t }
    if (b > c) { t = b; b = c; c = t }
    if (a + 1 === b && a + 2 === c) {
        return [0, 0];
    } else if (a + 1 === b || b + 1 === c || a + 2 === b || b + 2 === c) {
        return [1, c - a - 2];
    } else {
        return [2, c - a - 2];
    }
};

console.log(numMovesStones(1, 2, 5));
console.log(numMovesStones(4, 3, 2));