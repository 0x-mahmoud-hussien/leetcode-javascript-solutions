
// https://leetcode.com/problems/add-two-numbers?envType=problem-list-v2&envId=linked-list
function ListNode(val, next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function(l1, l2){
    let nums1 = [];
    let current = l1;
    while(current){
        nums1.push(current.val);
        current = current.next;
    }

    let nums2 = [];
    let current1 = l2;
    while(current1){
        nums2.push(current1.val);
        current1 = current1.next;
    }

    nums1 = nums1.reverse().join('');
    nums2 = nums2.reverse().join('');

    let result = (BigInt(nums1) + BigInt(nums2)).toString();

    result = result.split('').reverse();

    let dummy = new ListNode(0);
    let s = dummy;

    for(let val of result){
        s.next = new ListNode(Number(val));
        s = s.next;
    }

    return dummy.next;
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const result = addTwoNumbers(l1, l2);

let output = [];
let current = result;
while (current) {
    output.push(current.val);
    current = current.next;
}

console.log(output);  