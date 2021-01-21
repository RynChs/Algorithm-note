/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    if (!candies || candies.length === 0) {
        return null;
    }
    let maxNum = candies[0];
    for (const item of candies) {
        maxNum = Math.max(maxNum, item);
    }
    let ans = [];
    for (const item of candies) {
        ans.push(!!(item + extraCandies >= maxNum));
    }
    return ans;
};

const candies1 = [2,3,5,1,3];
const extraCandies1 = 3;
console.log(kidsWithCandies(candies1, extraCandies1));

const candies2 = [4,2,1,1,2];
const extraCandies2 = 1;
console.log(kidsWithCandies(candies2, extraCandies2));

const candies3 = [12,1,12];
const extraCandies3 = 10;
console.log(kidsWithCandies(candies3, extraCandies3));