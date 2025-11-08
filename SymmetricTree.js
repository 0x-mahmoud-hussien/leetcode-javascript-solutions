
// https://leetcode.com/problems/symmetric-tree?envType=problem-list-v2&envId=binary-tree
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var isSymmetric = function(root) {
    if(!root) return true;
    return isMirror(root.left, root.right);
}

function isMirror(left, right) {
    if(!left && !right) return true;
    if(!left || !right) return false;
    if(left.val !== right.val) return false;
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}

let n3_left = new TreeNode(3);
let n4_left = new TreeNode(4);
let n2_left = new TreeNode(2, n3_left, n4_left);

let n4_right = new TreeNode(4);
let n3_right = new TreeNode(3);
let n2_right = new TreeNode(2, n4_right, n3_right);

let root1 = new TreeNode(1, n2_left, n2_right);
console.log(isSymmetric(root1));

let n3_left2 = new TreeNode(3);
let n2_left2 = new TreeNode(2, null, n3_left2);

let n3_right2 = new TreeNode(3);
let n2_right2 = new TreeNode(2, null, n3_right2);

let root2 = new TreeNode(1, n2_left2, n2_right2);
console.log(isSymmetric(root2));  