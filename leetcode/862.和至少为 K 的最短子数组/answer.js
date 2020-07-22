/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
    let P = new Array(A.length+1).fill(0)
    for(let i=0;i<A.length;i++){
        P[i+1]= P[i]+A[i]
    }
    let queue=[],min=A.length+1;
    for(let j=0;j<P.length;j++){
        // 上次的和大于本次的和，即P[j-1]>P[j],则不存取本次的j
        while(queue.length!=0 && P[queue[queue.length-1]] >=P[j]){
            queue.pop()
        }
        while(queue.length!=0 && P[j]-P[queue[0]]>=K){
            // 当本次的P[j]>P[滑动窗口初始值]，则取最小长度
            min = Math.min(j-queue[0],min)
            // 并删除滑动窗口初始值，而后重新push进当前j，则滑动窗口上次结束值为初始值，当前j为滑动窗口结束值
            queue.shift()
        }
        queue.push(j)
    }
    return min<A.length+1?min:-1;
};

console.log(shortestSubarray([1], 1));
console.log(shortestSubarray([1, 2], 4));
console.log(shortestSubarray([2, -1, 2], 3));
console.log(shortestSubarray([84,-37,32,40,95], 167));