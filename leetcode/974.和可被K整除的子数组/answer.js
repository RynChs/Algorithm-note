/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByKBad = function(A, K) {
    let num = 0;
    for (let i = 0; i < A.length; i++) {
        let sum = 0;
        for (let j = i; j < A.length; j++) {
            sum += A[j];
            sum % K === 0 && sum++;
        }        
    }
    return num;
};

// 前缀和  P[j] mod K === P[i−1] mod K
var subarraysDivByK = function(A, K) {
    let count = 0;
    let map = new Array(K).fill(0);
    map[0] = 1;
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum = (sum + A[i]) % K;
        if (sum < 0) sum += K;
        count += map[sum];
        map[sum]++;
    }
    return count;
}

const A = [7,4,-10];
const K = 5;
console.log(subarraysDivByK(A, K));