
// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii?envType=problem-list-v2&envId=linked-list
function ListNode(val, next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var deleteDuplicates = function(head) {

    let dummy = new ListNode(0, head);
    let prev = dummy; 
    let current = head;

    while(current) {
        if(current.next && current.val === current.next.val) {
            let valToRemove = current.val;
            while(current && current.val === valToRemove) {
                current = current.next;
            }
            prev.next = current;
        } else {
            prev = current;
            current = current.next;
        }
    }

    return dummy.next;
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

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5)))))));
console.log("Before removing duplicates:");
printList(head);

head = deleteDuplicates(head);
console.log("After removing duplicates:");
printList(head);