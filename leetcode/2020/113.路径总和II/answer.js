/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    const res = [];
    if (root) {
        const dfs = (node, total, nums) => {
            total += node.val;
            nums.push(node.val);
            if (node.left || node.right) {
                node.left && dfs(node.left, total, nums.slice());
                node.right && dfs(node.right, total, nums.slice());
            } else if (total === sum) {
                res.push(nums);
            }
        }
        dfs(root, 0, []);
    }
    return res;
};