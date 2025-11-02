
// https://leetcode.com/problems/odd-even-linked-list?envType=problem-list-v2&envId=linked-list
function ListNode(val, next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var oddEvenList = function(head) {
    if (!head || !head.next) return head;

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
};

function printList(head){
    let result = [];
    let current = head;
    while(current){
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log("Before: ");
printList(head);

head = oddEvenList(head);
console.log("After: ");
printList(head);