/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let root = new ListNode(0, head);
    let node = root;
    while (node.next !== null && node.next.next !== null) {
        let node1 = node.next;
        let node2 = node.next.next;
        node.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        node = node1;
    }
    return root.next;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

const head1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
};
console.log(swapPairs(head1));

const head2 = null;
console.log(swapPairs(head2));

const head3 = {
    val: 1,
    next: null
};
console.log(swapPairs(head3));