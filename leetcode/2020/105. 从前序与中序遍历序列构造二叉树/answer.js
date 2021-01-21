/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!inorder.length) return null;
    let rootVal = preorder[0];
    let rootIndex = inorder.indexOf(rootVal);
    let tree = new TreeNode(rootVal);
    tree.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
    tree.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1)); 
    return tree;
};

const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7];
console.log(buildTree(preorder, inorder));