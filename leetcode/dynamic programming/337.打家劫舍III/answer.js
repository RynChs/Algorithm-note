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
var rob = function(root) {
    let ans = helper(root);
    return Math.max(ans[0], ans[1]);
};

const helper = (tree) => {
    if (tree === null) return [0, 0];
    let res = JSON.parse(JSON.stringify([0, 0]));
    let left = helper(tree.left);
    let right = helper(tree.right);
    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    res[1] = left[0] + right[0] + tree.val;
    return res;
}