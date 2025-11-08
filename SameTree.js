
// https://leetcode.com/problems/same-tree?envType=problem-list-v2&envId=binary-tree
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === null ? null : left);
    this.right = (right === null ? null : right);
}

var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(!p || !q) return false;
    if(p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}


let p1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let q1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(p1, q1)); 

let p2 = new TreeNode(1, new TreeNode(2), null);
let q2 = new TreeNode(1, null, new TreeNode(2));
console.log(isSameTree(p2, q2)); 

let p3 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
let q3 = new TreeNode(1, new TreeNode(1), new TreeNode(2));
console.log(isSameTree(p3, q3)); 