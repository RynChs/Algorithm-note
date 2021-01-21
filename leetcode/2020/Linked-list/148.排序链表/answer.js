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
var sortList = function (head) {
    const list = new ListNode(0);
    list.next = head;
    let slow = list;
    let quick = list;
    while (quick.next) {
        slow = slow.next;
        quick = quick.next;
        quick.next && (quick = quick.next);
    }
    if (slow === quick) return list.next;
    let rightList = slow.next;
    slow.next = null;
    let leftList = list;
    return merge(sortList(leftList.next), sortList(rightList));
}

var merge = function (left, right) {
    const list = new ListNode(0);
    list.next = left;
    let lNode = list;
    let rNode = right;

    while (lNode && rNode) {
        while (lNode.next && lNode.next.val < rNode.val) {
            lNode = lNode.next;
        }
        let rNext = rNode.next;
        rNode.next = lNode.next;
        lNode.next = rNode;
        rNode = rNext;
    }
    return list.next;
}