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
var oddEvenList = function(head) {
    if (head === null) return null;
    let evenHead = head.next;
    // 奇数节点和偶数节点
    let odd = head, even = evenHead;
    while (even && even.next) {
        // 更新奇数节点
        odd.next = even.next;
        odd = odd.next;
        // 更新偶数节点
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};

const list1 = {
    val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } }
}
console.log(oddEvenList(list1));