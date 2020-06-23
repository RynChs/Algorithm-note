/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let inDegree = new Array(numCourses).fill(0); // 初始化入度数组
    let graph = {}; // 记录课程关系
    for (const item of prerequisites) {
        inDegree[item[0]]++;
        if (graph[item[1]]) {
            graph[item[1]].push(item[0]);
        } else {
            graph[item[1]] = [item[0]];
        }
    }

    let ans = []; // 结果数组
    let queue = []; // 存放 入度为0的课
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    while (queue.length) {
        let cur = queue.shift(); // 代表选这门课
        ans.push(cur);
        let toEnQueue = graph[cur]; // 查看哈希表，获取后续课程
        if (toEnQueue && toEnQueue.length) {
            for (const item of toEnQueue) {
                inDegree[item]--; // 对应的课程减一
                if (inDegree[item] === 0) { // 如果入度为0，那么选这个课
                    queue.push(item);
                }
            }
        }
    }
    return ans.length === numCourses ? ans : [];
};

// const numCourses1 = 2, prerequisites1 = [[1,0]];
// console.log(findOrder(numCourses1, prerequisites1));

const numCourses2 = 4, prerequisites2 = [[1,0],[2,0],[3,1],[3,2]];
console.log(findOrder(numCourses2, prerequisites2));