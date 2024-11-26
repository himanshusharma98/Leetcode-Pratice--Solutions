
var insertGreatestCommonDivisors = function(head) {
    let p1=head
    let p2=head.next
    function gcdmaker(a,b){
        if(a==0)return b
        if(b==0)return a
        while(b){
            let rem=a%b
            a=b
            b=rem
        }
        return a
    }
    while(p1&&p2){
        let gcd=new ListNode(gcdmaker(p1.val,p2.val))
        p1.next=gcd
        gcd.next=p2
        p1=p2
        p2=p2.next
    }
    return head
};
