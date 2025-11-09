
// https://leetcode.com/problems/sum-of-left-leaves?envType=problem-list-v2&envId=tree
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var sumOfLeftLeaves = function(root) {
    if(!root) return 0;
    let sum = 0;

    if(root.left) {
        if(!root.left.left && !root.left.right) {
            sum += root.left.val;
        } else {
            sum += sumOfLeftLeaves(root.left);
        }
    }

    sum += sumOfLeftLeaves(root.right);
    return sum;
}

let n9 = new TreeNode(9);
let n15 = new TreeNode(15);
let n7 = new TreeNode(7);
let n20 = new TreeNode(20, n15, n7);
let root1 = new TreeNode(3, n9, n20);

console.log(sumOfLeftLeaves(root1));

let root2 = new TreeNode(1);
console.log(sumOfLeftLeaves(root2));