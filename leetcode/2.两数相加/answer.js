/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0);
    let curr = res;
    let remainder = 0;
    while (l1 || l2) {
        const num1 = l1 ? l1.val : 0;
        const num2 = l2 ? l2.val : 0;
        let sum = remainder + num1 + num2;
        remainder = parseInt(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (remainder > 0) curr.next = new ListNode(remainder);
    return res.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

console.log(addTwoNumbers(
    { val: 2, next: { val: 4, next: { val: 3 } } },
    { val: 5, next: { val: 6, next: { val: 4 } } }
))