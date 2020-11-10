/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const arr = new Array(26).fill(0);
    for (let i = 0; i < tasks.length; i++) {
        const index = tasks[i].charCodeAt() - 'A'.charCodeAt();
        arr[index]++;
    }
    arr.sort((a, b) => a - b);
    let time = 0;
    while (arr[25] > 0) {
        let i = 0;
        while (i <= n) {
            if (arr[25] === 0) break;
            if (i < 26 && arr[25 - i] > 0) {
                arr[25 - i]--;
            }
            time++;
            i++;
        }
        arr.sort((a, b) => a - b);
    }
    return time;
};

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const arr = new Array(26).fill(0);
    for (let i = 0; i < tasks.length; i++) {
        const index = tasks[i].charCodeAt() - 'A'.charCodeAt();
        arr[index]++;
    }
    arr.sort((a, b) => a - b);

    const maxVal = arr[25] - 1;
    // 待命时间
    let slots = maxVal * n;
    for (let i = 24; i >= 0 && arr[i] > 0; i--) {
        slots -= Math.min(maxVal, arr[i]);
    }
    return slots > 0 ? slots + tasks.length : tasks.length;
};

console.log(leastInterval(["A","A","A","B","B","B"], 2));