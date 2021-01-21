/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let res = root;
    if (p.val > q.val) [p, q] = [q, p];
    while(true) {
        if((res.val > p.val && res.val <= q.val) || (res === p || res === q)) {
            return res;
        } else if(res.val < p.val && res.val < q.val) {
            res = res.right;
        } else {
            res = res.left;
        }
    }
};