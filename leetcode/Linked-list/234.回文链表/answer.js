/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let strArr = [];
    while(head !== null) {
        strArr.push(head.val.toString());
        head = head.next;
    }
    return strArr.join('') === strArr.reverse().join('');
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var BetterIsPalindrome = function(head) {
    if (head === null || head.next === null) return true;
    let mid = head; // 右边部分
    let pre = null;
    let reverse = null; // 反转（左边部分）
    // 找到中点
    while (head !== null && head.next !== null) {
        pre = mid;
        mid = mid.next;
        head = head.next.next;
        pre.next = reverse;
        reverse = pre;
    }
    if (head) mid = mid.next;
    while (mid) {
        if (mid.val !== reverse.val) return false;
        mid = mid.next;
        reverse = reverse.next;
    }
    return true;
};