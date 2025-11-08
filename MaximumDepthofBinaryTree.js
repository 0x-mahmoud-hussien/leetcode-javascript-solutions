
// https://leetcode.com/problems/maximum-depth-of-binary-tree?envType=problem-list-v2&envId=binary-tree
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === null ? null : left);
    this.right = (right === null ? null : right);
}

var maxDepth = function(root) {
    if(!root) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

let n9 = new TreeNode(9);
let n15 = new TreeNode(15);
let n7 = new TreeNode(7);
let n20 = new TreeNode(20, n15, n7);
let root1 = new TreeNode(3, n9, n20);

console.log(maxDepth(root1));

let n2 = new TreeNode(2);
let root2 = new TreeNode(1, null, n2);

console.log(maxDepth(root2));