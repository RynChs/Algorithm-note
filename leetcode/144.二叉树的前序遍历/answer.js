/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (root === null) return [];
    let stack = [root];
    let res = [];
    while (stack.length) {
        const node = stack.shift();
        res.push(node.val);
        if (node.right) stack.unshift(node.right);
        if (node.left) stack.unshift(node.left);
    }
    return res;
};