
// https://leetcode.com/problems/swap-nodes-in-pairs?envType=problem-list-v2&envId=linked-list
function ListNode(val, next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var swapPairs = function(head){
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;

    while(prev.next && prev.next.next){
        let first = prev.next;
        let second = first.next;

        prev.next = second;
        first.next = second.next;
        second.next = first;

        prev = first;
    }

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

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log("Before Swap");
printList(head);

head = swapPairs(head);
console.log("After Swap");
printList(head);