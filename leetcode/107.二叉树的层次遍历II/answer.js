/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    const res = [];
    const helper = (node, count) => {
        if (node === null) return [];
        if (!res[count]) {
            res[count] = [node.val];
        } else {
            res[count].push(node.val);
        }
        helper(node.left, count + 1);
        helper(node.right, count + 1);
    }
    helper(root, 0);
    return res.reverse();
};