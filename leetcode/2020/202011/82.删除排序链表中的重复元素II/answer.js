/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null || head.next === null) return head;
    if (head.val === head.next.val) {
        while (head && head.next && head.val === head.next.val) {
            head = head.next;
        }
        return deleteDuplicates(head.next);
    } else {
        head.next = deleteDuplicates(head.next);
        return head;
    }
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const list1 = {
    val: 1, next: { val: 2, next: { val: 3, next: { val: 3, next: { val: 4, next: { val: 4, next: { val: 5, next: null } } } } } }
}
console.log(deleteDuplicates(list1));

const list2 = {
    val: 1, next: { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: null } } } }
}
console.log(deleteDuplicates(list2));