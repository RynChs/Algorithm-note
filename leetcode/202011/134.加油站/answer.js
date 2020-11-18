/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length;
    let i = 0;
    while (i < n) {
        let sumOfGas = 0, sumOfCost = 0;
        let count = 0;
        while (count < n) {
            const j = (i + count) % n;
            sumOfGas += gas[j];
            sumOfCost += cost[j];
            if (sumOfGas < sumOfCost) break;
            count++;
        }
        if (count === n) {
            return i;
        } else {
            i = i + count + 1;
        }
    }
    return -1;
};

console.log(canCompleteCircuit(
    [1,2,3,4,5],
    [3,4,5,1,2]
));

console.log(canCompleteCircuit(
    [2,3,4],
    [3,4,3]
));