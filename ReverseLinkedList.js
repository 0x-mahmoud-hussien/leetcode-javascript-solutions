
// https://leetcode.com/problems/reverse-linked-list?envType=problem-list-v2&envId=linked-list
function ListNode(val, next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var reverseList = function(head){

    let prev = null;
    let current = head;
    let next = null;

    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
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
console.log("Before Reverse List");
printList(head);

head = reverseList(head);
console.log("After Reverse List");
printList(head);