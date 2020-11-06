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
var insertionSortList = function(head) {
    if (head === null) return null;
    let preHead = new ListNode(0);
    let curr = head;
    let pre = preHead;
    while (curr) {
        // 下一个要插入pre的元素
        const next = curr.next;
        // 寻找插入的位置
        while (pre.next && pre.next.val < curr.val) {
            pre = pre.next;
        }
        // 找到位置，下个值比当前值大，插入
        curr.next = pre.next;
        pre.next = curr;
        // 重置pre
        pre = preHead;
        // 赋值下一个元素
        curr = next;
    }
    return preHead.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const list1 = { val: 4, next: { val: 2, next: { val: 1, next: { val: 3, next: null } } } }
console.log(insertionSortList(list1));