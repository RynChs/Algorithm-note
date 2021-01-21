/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0;
    let stack = [];
    let cur = root;

    while (cur) {  // 右子节点，不断压栈
        stack.push(cur);
        cur = cur.right;
    }

    while (stack.length) {  // 直到清空递归栈
        cur = stack.pop();    // 位于栈顶的节点出栈
        sum += cur.val;       // 做事情
        cur.val = sum;        // 做事情
        cur = cur.left;       // 找左子节点
        while (cur) {         // 存在，左子节点压栈
            stack.push(cur);    // 
            cur = cur.right;    // 找当前左子节点的右子节点，不断压栈
        }
    }

    return root;
};