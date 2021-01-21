/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};
    for (const num of nums) {
        map[num] = map[num] ? map[num] + 1 : 1;
    }
    console.log(map);
    let res =[];
    if (Object.keys(map).length <= k) {
        for (const key in map) {
            res.push(Number(key));
        }
    } else {
        const bucket = new Array(Object.keys(map).length);
        for (const key in map) {
            const value = map[key];
            if (!bucket[value]) {
                bucket[value] = [];
            }
            bucket[value].push(key);
        }
        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i] && res.length < k) {
                bucket[i].map((item) => res.push(Number(item)));
            }
        }
    }

    return res;
};

console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([4,1,-1,2,-1,2,3], 2));