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
var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity);
};

function helper(root, low, up) {
    if (root === null) return true;
    if (root.val <= low || root.val >= up) return false;
    return helper(root.left, low, root.val) && helper(root.right, root.val, up);
}