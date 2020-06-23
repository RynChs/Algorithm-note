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
var levelOrder = function(root) {
    let ans = [];
    if (!root) return ans;
    let q = [];
    q.push(root);
    while (q.length) {
        ans.push([]);
        let len = q.length;
        for (let i = 0; i < len; i++) {
            const node = q.shift();
            ans[ans.length - 1].push(node.val);
            node.left && q.push(node.left);
            node.right && q.push(node.right);
        }
    }
    return ans;
};