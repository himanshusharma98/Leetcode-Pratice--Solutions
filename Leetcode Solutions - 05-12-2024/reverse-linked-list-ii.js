/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head || left === right) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    for(let i = 1; i < left; i++){
        prev = prev.next;
    }
    let curr = prev.next;
    for(let i = 0; i < right - left; i++){
        let temp = curr.next;
        curr.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
    }
    return dummy.next;
}
function createList(arr){
    let dummy = new ListNode(0);
    let curr = dummy;
    for(let val of arr){
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return dummy.next;
}
function printList(head){
    let result = [];
    while(head !== null){
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}
function ListNode(val = 0, next = null){
    this.val = val;
    this.next = next;
}