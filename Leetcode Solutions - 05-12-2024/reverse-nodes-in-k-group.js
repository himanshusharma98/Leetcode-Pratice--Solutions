/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k){
    if (!head || k === 1) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let prevGroupEnd = dummy;
    let curr = head;
    let count = 0;
    while (curr) {
        count++;
        curr = curr.next;
    }
    curr = head;
    while (count >= k) {
        let groupStart = curr; 
        let prev = null;
        let next = null;
        for (let i = 0; i < k; i++) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        prevGroupEnd.next = prev; 
        groupStart.next = curr;  
        prevGroupEnd = groupStart;
        count -= k;
    }
    return dummy.next;
}
function createList(arr) {
    let dummy = new ListNode(0);
    let curr = dummy;
    for (let val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return dummy.next;
}
function printList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}
function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

