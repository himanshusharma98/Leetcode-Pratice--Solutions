class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode trav = head;
        while(trav != null && trav.next != null){
            trav = trav.next.next;
            head = head.next;
        } return head;
        
    }
}