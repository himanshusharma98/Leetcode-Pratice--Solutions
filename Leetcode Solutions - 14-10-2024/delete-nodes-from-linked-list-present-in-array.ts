class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {

    let set = new Set(nums);


    while (head && set.has(head.val)) {
        head = head.next;
    }

    let current: ListNode | null = head;


    while (current && current.next) {
        if (set.has(current.next.val)) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
}