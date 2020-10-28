/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = [];
    const order = (node) => {
        if (root === null) return null;
        node.left && order(node.left);
        arr.push(node.val);
        node.right && order(node.right);
    }
    order(root);
    return arr[k - 1];
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = [];

    while (true) {
        while (root !== null) {
            arr.push(root);
            root = root.left;
        }
        root = arr.pop();
        if (--k === 0) return root.val;
        root = root.right;
    }
};