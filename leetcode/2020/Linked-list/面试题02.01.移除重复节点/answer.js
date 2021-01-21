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
var removeDuplicateNodes = function(head) {
    let ob = head;
    while (ob != null) {
        let oc = ob;
        while (oc.next != null) {
            if (oc.next.val == ob.val) {
                oc.next = oc.next.next;
            } else {
                oc = oc.next;
            }
        }
        ob = ob.next;
    }
    return head;
};