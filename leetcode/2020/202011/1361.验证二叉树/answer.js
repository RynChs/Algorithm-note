/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    // 根结点
    const root = [];
    for (let i = 0; i < n; i++) {
        if (!leftChild.includes(i) && !rightChild.includes(i)) {
            root.push(i);
        }
    }
    if (root.length !== 1) return false;

    let tree = [root[0]];
    let pointer = 0;
    while (pointer < tree.length) {
        const curNode = tree[pointer];

        const leftNode = leftChild[curNode];
        if (leftNode !== -1) {
            if (tree.includes(leftNode)) {
                return false;
            } else {
                tree.push(leftNode);
            }
        }

        const rightNode = rightChild[curNode];
        if (rightNode !== -1) {
            if (tree.includes(rightNode)) {
                return false;
            } else {
                tree.push(rightNode);
            }
        }

        pointer++;
    }

    if (pointer < n) return false;

    return true;
};

console.log(validateBinaryTreeNodes(4, [1,-1,3,-1], [2,-1,-1,-1]));
console.log(validateBinaryTreeNodes(4, [1,-1,3,-1], [2,3,-1,-1]));
console.log(validateBinaryTreeNodes(2, [1,0], [-1,-1]));
console.log(validateBinaryTreeNodes(6, [1,-1,-1,4,-1,-1], [2,-1,-1,5,-1,-1]));