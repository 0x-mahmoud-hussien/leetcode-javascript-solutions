
// https://leetcode.com/problems/delete-node-in-a-linked-list?envType=problem-list-v2&envId=linked-list
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

function printList(head) {
    let current = head;
    let result = "";
    while (current) {
        result += current.val + " => ";
        current = current.next;
    }
    console.log(result + "null");
}

let head = new ListNode(4);
head.next = new ListNode(5);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(9);

console.log("Before:");
printList(head);

deleteNode(head.next);

console.log("After:");
printList(head);