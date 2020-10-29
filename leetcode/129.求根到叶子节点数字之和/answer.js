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
var sumNumbers = function(root) {
    const dfs = (node, preSum) => {
        if (node === null) return null;
        const sum = preSum * 10 + node.val;
        if (node.left === null && node.right === null) {
            return sum;
        } else {
            return dfs(node.left, sum) + dfs(node.right, sum);
        }
    }
    return dfs(root, 0);
};

const root1 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
}
console.log(sumNumbers(root1));

const root2 = {
    val: 4,
    left: {
        val: 9,
        left: { val: 5, left: null, right: null },
        right: { val: 1, left: null, right: null }
    },
    right: { val: 0, left: null, right: null },
}
console.log(sumNumbers(root2));