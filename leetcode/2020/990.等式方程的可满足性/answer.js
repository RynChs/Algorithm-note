/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    let parent = new Array(26);
    for (let i = 0; i < 26; i++) {
        parent[i] = i;
    }
    const a = 'a'.charCodeAt();
    for (let i = 0; i < equations.length; i++) {
        if (equations[i][1] === '=') {
            const index1 = equations[i][0].charCodeAt() - a;
            const index2 = equations[i][3].charCodeAt() - a;
            union(parent, index1, index2);
        }
    }
    for (let i = 0; i < equations.length; i++) {
        if (equations[i][1] === '!') {
            const index1 = equations[i][0].charCodeAt() - a;
            const index2 = equations[i][3].charCodeAt() - a;
            if (find(parent, index1) === find(parent, index2)) {
                return false;
            }
        }
    }
    return true;
};

function union(parent, index1, index2) {
    parent[find(parent, index1)] = find(parent, index2);
}

function find(parent, index) {
    while (parent[index] !== index) {
        parent[index] = parent[parent[index]];
        index = parent[index];
    }
    return index;
}

const equations1 = ["a==b","b!=a"];
console.log(equationsPossible(equations1));

const equations2 = ["b==a","a==b"];
console.log(equationsPossible(equations2));

const equations3 = ["a==b","b==c","a==c"];
console.log(equationsPossible(equations3));

const equations4 = ["a==b","b!=c","c==a"];
console.log(equationsPossible(equations4));

const equations5 = ["c==c","b==d","x!=z"];
console.log(equationsPossible(equations5));