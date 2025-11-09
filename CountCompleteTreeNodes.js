
// https://leetcode.com/problems/count-complete-tree-nodes?envType=problem-list-v2&envId=tree
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var countNodes = function(root) {
    if(!root) return 0;
    let left = countNodes(root.left);
    let right = countNodes(root.right);
    let result = left + right + 1;

    return result;
}

let n4 = new TreeNode(4);
let n5 = new TreeNode(5);
let n2 = new TreeNode(2, n4, n5);
let n6 = new TreeNode(6);
let n3 = new TreeNode(3, n6, null);
let root1 = new TreeNode(1, n2, n3);

console.log(countNodes(root1));