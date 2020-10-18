/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let res = new ListNode(0, head);
    let firstList = head;
    let secondList = res;
    for (let i = 0; i < n; i++) {
        firstList = firstList.next;
    }
    while (firstList !== null) {
        firstList = firstList.next;
        secondList = secondList.next;
    }
    secondList.next = secondList.next.next;
    return res.next;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

const head = {
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
console.log(JSON.stringify(removeNthFromEnd(head, 2)));
console.log(removeNthFromEnd({ val: 1, next: null }, 1));