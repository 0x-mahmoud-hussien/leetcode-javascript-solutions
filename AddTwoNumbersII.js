
// https://leetcode.com/problems/add-two-numbers-ii?envType=problem-list-v2&envId=linked-list
function ListNode(val, next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function(l1, l2){
    let stack1 = [];
    let stack2 = [];

    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let carry = 0;
    let head = null;

    while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
        let sum = carry;

        if (stack1.length > 0) sum += stack1.pop();
        if (stack2.length > 0) sum += stack2.pop();

        carry = Math.floor(sum / 10);

        let newNode = new ListNode(sum % 10);
        newNode.next = head;
        head = newNode;
    }

    return head;
};

function printList(head) {
    let current = head;
    let listStr = "";
    while (current) {
        listStr += current.val + " => ";
        current = current.next;
    }
    console.log(listStr + "null");
}

let l1 = new ListNode(7, new ListNode(2, new ListNode(4, new ListNode(3))));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let result = addTwoNumbers(l1, l2);

printList(result);
