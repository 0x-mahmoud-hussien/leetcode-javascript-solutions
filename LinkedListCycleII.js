
// https://leetcode.com/problems/linked-list-cycle-ii?envType=problem-list-v2&envId=linked-list
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var detectCycle = function(head) {
    if (!head) return null; 

    let slow = head; 
    let fast = head; 

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) { 
            let start = head; 
        
            while (start !== slow) {
                start = start.next;
                slow = slow.next;
            }
            return start; 
        }
    }

    return null; 
};

let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; 

console.log(detectCycle(node1));