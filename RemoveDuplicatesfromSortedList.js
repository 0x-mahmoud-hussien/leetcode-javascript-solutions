
// https://leetcode.com/problems/remove-duplicates-from-sorted-list?envType=problem-list-v2&envId=linked-list
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var deleteDuplicates = function(head) {
    if (!head) return null; 

    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head; 
};

function printList(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
}

let head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
console.log("Before removing duplicates:");
printList(head);

head = deleteDuplicates(head);
console.log("After removing duplicates:");
printList(head);