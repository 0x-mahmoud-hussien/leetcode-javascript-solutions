
// https://leetcode.com/problems/remove-nth-node-from-end-of-list?envType=problem-list-v2&envId=linked-list
function ListNode(val, next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var removeNthFromEnd = function(head, n){
    let dummy = new ListNode(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    for(let i = 0; i <= n; i++){
        fast = fast.next;
    }

    while(fast){
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};

function printList(head){
    let current = head;
    let listStr = "";
    while(current){
        listStr += current.val + " => ";
        current = current.next;
    }
    console.log(listStr + "null");
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log("Before Remove");
printList(head);

head = removeNthFromEnd(head, 2);
console.log("After Remove");
printList(head);