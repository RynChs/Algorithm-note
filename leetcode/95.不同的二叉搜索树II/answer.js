/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    let map = new Map();
    function buildTree(start, end) {
        let _result = []
        if (start > end) return [null]
        // 如果已经计算过则直接返回结果
        if (map.has(start + '->' + end)) return map.get(start + '->' + end)
        for (let i = start; i <= end; i++) {
            let left = buildTree(start, i - 1)
            let right = buildTree(i + 1, end)
            for (const leftNode of left) {
                for (const rightNode of right) {
                    let node = new TreeNode(i)
                    node.left = leftNode
                    node.right = rightNode
                    _result.push(node)
                }
            }
        }
        // 存储计算结果
        map.set(start + '->' + end, _result)
        return _result
    }
    if (n === 0) return [];
    return buildTree(1, n);
};