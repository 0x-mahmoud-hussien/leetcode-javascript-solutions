
// https://leetcode.com/problems/kth-smallest-element-in-a-bst?envType=problem-list-v2&envId=tree
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var kthSmallest = function(root, k) {
    let count = 0;
    let result = null;

    function traverse(node) {
        if(!node || result !== null) return;

        traverse(node.left);
        count++;
        if(count === k) {
            result = node.val;
            return;
        }
        traverse(node.right);
    }
    traverse(root);
    return result;
}

let n2_1 = new TreeNode(2);
let n1_1 = new TreeNode(1, null, n2_1);
let n4_1 = new TreeNode(4);
let root1 = new TreeNode(3, n1_1, n4_1);

console.log(kthSmallest(root1, 1));

let n1_2 = new TreeNode(1);
let n2_2 = new TreeNode(2, n1_2);
let n4_2 = new TreeNode(4);
let n3_2 = new TreeNode(3, n2_2, n4_2);
let n6_2 = new TreeNode(6);
let root2 = new TreeNode(5, n3_2, n6_2);

console.log(kthSmallest(root2, 3));