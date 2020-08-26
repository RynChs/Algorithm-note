/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }

    const queue = [''];
    for (let i = 0; i < digits.length; i++) {
        const len = queue.length;
        for (let j = 0; j < len; j++) {
            const curStr = queue.shift();
            const letters = map[digits[i]];

            for (const letter of letters) {
                queue.push(curStr + letter);
            }
        }
    }

    return queue;
};

console.log(letterCombinations('23'));