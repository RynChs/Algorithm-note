/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null) return null;
    if (head.next === null) return head;
    let n = 1;
    let oldList = head;
    while (oldList.next !== null) {
        oldList = oldList.next;
        n++;
    }
    oldList.next = head;

    let newList = head;
    for (let i = 0; i < n - k % n - 1; i++) {
        newList = newList.next;
    }
    let new_head = newList.next;
    newList.next = null;

    return new_head;
};

const head1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }   
        }
    }
}
console.log(rotateRight(head1));