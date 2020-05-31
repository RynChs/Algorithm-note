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
var isSymmetric = function(root) {
    return check(root, root);
};

const check = (left, right) => {
    if (left === null && right === null) {
        return true;
    }
    if (left === null || right === null) {
        return false;
    }
    return left.val === right.val && check(left.left, right.right) && check(left.right, right.left);
}