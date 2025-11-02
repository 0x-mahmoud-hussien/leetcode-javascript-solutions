
// https://leetcode.com/problems/sort-list?envType=problem-list-v2&envId=linked-list
function ListNode(val, next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var sortList = function(head){
    const arr = [];
    let current = head;
    while(current){
        arr.push(current.val);
        current = current.next;
    }

    arr.sort((a, b) => a - b);

    let dummy = new ListNode(0);
    current = dummy;
    for(let val of arr){
        current.next = new ListNode(val);
        current = current.next;
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

let head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
console.log("Before Sort List");
printList(head);

head = sortList(head);
console.log("After Sort List");
printList(head);