/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const used = new Set();

    let factorial = 1;    // 阶乘
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    
    const helper = (temp) => {      // temp是当前已选的数字数组
        const progress = temp.length; // progress表示当前已选了几个数字
    
        if (progress == n) { // 因为是空降到正确的组，选够了n个即可返回
            return temp.join('');
        }
    
        const groupNum = factorial / (n - progress); // 一个分组有多少个排列
        factorial = groupNum;                        // 更新一下阶乘
    
        for (let i = 1; i <= n; i++) {
            if (used.has(i)) continue;
    
            if (k > groupNum) { // k大于一组的个数
                k = k - groupNum; // 更新k，
                continue;         // 跳过这一组，即跳过当前的数字i
            }
            temp.push(i);       // 选择i
            used.add(i);        // 记录选择
            return helper(temp);// 继续选
        }
    };
  
    return helper([]);
};