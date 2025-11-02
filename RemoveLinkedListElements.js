
// https://leetcode.com/problems/remove-linked-list-elements?envType=problem-list-v2&envId=linked-list
function ListNode(val, next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var removeElements = function(head, val){

    let dummy = new ListNode(0, head);
    let current = dummy;

    while(current.next){
        if(current.next.val === val){
            current.next = current .next.next;
        } else{
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

let head = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
console.log("Before Remove Elements");
printList(head);

head = removeElements(head, 6);
console.log("After Remove Elements");
printList(head);