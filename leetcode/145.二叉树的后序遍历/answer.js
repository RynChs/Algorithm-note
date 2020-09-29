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
var postorderTraversal = function(root) {
    let res = [], stack = [];
    while (root || stack.length) {
        res.unshift(root.val);
        if (root.left) stack.push(root.left);
        if (root.right) stack.push(root.right);
        root = stack.pop()
    }
    return res;
};