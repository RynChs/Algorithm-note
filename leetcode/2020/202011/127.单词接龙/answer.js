/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    let queue = [[beginWord, 1]];
    while (queue.length) {
        let [word, transNumber] = queue.pop();
        if (word === endWord) return transNumber;
        for (let str of wordSet) {
            if (charDiff(word, str) === 1) {
                queue.unshift([str, transNumber+1]);
                wordSet.delete(str);
            }
        }
    }
    return 0;
};
  
const charDiff = (str1, str2) => {
    let changes = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] != str2[i]) changes += 1;
    }
    return changes;
}

console.log(ladderLength(
    "hit",
    "cog",
    ["hot","dot","dog","lot","log","cog"]
));

console.log(ladderLength(
    "hit",
    "cog",
    ["hot","dot","dog","lot","log"]
));