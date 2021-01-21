/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort(([a1, a2], [b1, b2]) => {
        if (a1 !== b1) {
            return a1 - b1;
        } else {
            return b2 - a2;
        }
    });

    const n = people.length;
    const res = new Array(n);
    for (const item of people) {
        let space = item[1] + 1;
        for (let i = 0; i < n; i++) {
            if (!res[i]) {
                --space;
                if (space === 0) {
                    res[i] = item;
                    break;
                }
            }
        }
    }
    return res;
};

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]));