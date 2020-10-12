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
var getMinimumDifference = function(root) {
    let res = Number.MAX_SAFE_INTEGER;
    let pre = -1;
    const dfs = (node) => {
        if (node === null) return;
        dfs(node.left);
        if (pre !== -1) {
            res = Math.min(res, node.val - pre);
        }
        pre = node.val;
        dfs(node.right);
    }
    dfs(root);
    return res;
};