/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let n = length(head)
    if(k % n === 0 || !head) return head
    let node = head
    k = n > k ? k : k % n
    while(n - k - 1){
        node = node.next
        k++
    }
    res = tail = node.next
    node.next = null
    while(tail.next){
        tail = tail.next
    }
    tail.next = head
    return res
};
var length = function(node){
    let n = 0;
    while(node){
        node = node.next
        n++
    }
    return n
}