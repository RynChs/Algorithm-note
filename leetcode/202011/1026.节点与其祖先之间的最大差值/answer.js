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
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    const maxDiff = (node, max, min) => {
        if (node === null) {
            return max - min;
        }
        max = Math.max(max, node.val);
        min = Math.min(min, node.val);
        return Math.max(maxDiff(node.left, max, min), maxDiff(node.right, max, min));
    }
    return maxDiff(root, root.val, root.val);
};

console.log(maxAncestorDiff(
    {
        val: 8,
        left: {
            val: 3,
            left: {
                val: 1,
                left: null,
                right: null
            },
            right: {
                val: 6,
                left: {
                    val: 4,
                    left: null,
                    right: null
                },
                right: {
                    val: 7,
                    left: null,
                    right: null
                } 
            }
        },
        right: {
            val: 10,
            left: null,
            right: {
                val: 14,
                left: {
                    val: 13,
                    left: null,
                    right: null
                },
                right: null
            }
        }
    }
))

console.log(maxAncestorDiff(
    {
        val: 1,
        left: null,
        right: {
            val: 2,
            left: null,
            right: {
                val: 0,
                left: {
                    val: 3,
                    left: null,
                    right: null
                },
                right: null
            }
        }
    }
));
