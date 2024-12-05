/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2) return null;
    else if(!l1) return l2;
    else if(!l2) return l1;
    var a = l1.val + l2.val;
    var p = new ListNode(a % 10);
    p.next = addTwoNumbers(l1.next, l2.next);
    if(a >= 10) p.next = addTwoNumbers(p.next, new ListNode(1));
    return p;
    
};