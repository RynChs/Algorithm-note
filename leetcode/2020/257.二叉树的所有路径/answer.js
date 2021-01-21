/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let paths = [];
    const helper = (node, path) => {
        if (node) {
            path += `${node.val}`;
            if (node.left === null && node.right === null) {
                paths.push(path);
            } else {
                path += '->';
                helper(node.left, path);
                helper(node.right, path);
            }
        }
    }
    helper(root, '');
    return paths;
};