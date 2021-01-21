/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
    let list = [];
    let i = 0;
    let val = '';
    let deep = 0;
    for (const s of S) {
        if (s !== '-') {
            val += s;
        } else if (val) {
            insertNode(val, deep, list);
            deep = 1;
            val = '';
        } else {
            deep++;
        }
    }
    insertNode(val, deep, list);
    return list[0];
};

function insertNode(val, deep, list) {
    list[deep] = new TreeNode(val);
    if (deep === 0) return;
    if (!list[deep - 1].left) {
        list[deep - 1].left = list[deep];
    } else {
        list[deep - 1].right = list[deep];
    }
}