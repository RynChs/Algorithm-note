/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    const dfs = (node, isLeft) => {
        if (node === null) return 0;
        if (node.left === null && node.right === null) return isLeft ? node.val : 0;
        return dfs(node.left, true) + dfs(node.right, false);
    }
    return dfs(root, false);
};