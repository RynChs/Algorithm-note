// 1. 递归
function recursive(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return recursive(n-1) + recursive(n-2);
}

// 2. 备忘录
function memo(n) {
    const memoObj = {
        0: 0,
        1: 1
    }
    for (let i = 2; i <= n; i++) {
        memoObj[i] = memoObj[i-1] + memoObj[i-2];        
    }
    return memoObj[n];
}

// 3. 动态规划
function dp(n) {
    let pprev = 0; // 前前一个
    let prev = 1; // 前一个
    let temp = 0; // 当前
    for (let i = 2; i <= n; i++) {
        temp = pprev + prev;
        pprev = prev;
        prev = temp;        
    }
    return temp;
}

const num = 10;
console.log('递归：', recursive(num));
console.log('备忘录：', memo(num));
console.log('动态规划：', dp(num));