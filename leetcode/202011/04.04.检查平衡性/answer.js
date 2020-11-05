/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let flag = true;
    const dfs = (node) => {
        if (node === null || !flag) return 0;
        const leftHeight = dfs(node.left) + 1;
        const rightHeight = dfs(node.right) + 1;
        if (Math.abs(leftHeight - rightHeight) > 1) flag = false;
        return Math.max(leftHeight, rightHeight);
    }
    dfs(root)
    return flag;
};