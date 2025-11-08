
// https://leetcode.com/problems/balanced-binary-tree?envType=problem-list-v2&envId=binary-tree
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var isBalanced = function(root) {

    function getHeight(node) {
        if(!node) return 0;

        const left = getHeight(node.left);
        if(left === -1) return -1;

        const right = getHeight(node.right);
        if(right === -1) return -1;

        if(Math.abs(left - right) > 1) return -1;

        return Math.max(left, right) + 1;
    }

    return getHeight(root) !== -1;
}

let n15 = new TreeNode(15);
let n7 = new TreeNode(7);
let n20 = new TreeNode(20, n15, n7);
let n9 = new TreeNode(9);
let root1 = new TreeNode(3, n9, n20);

console.log(isBalanced(root1));

let n4_left = new TreeNode(4);
let n4_right = new TreeNode(4);
let n3_left = new TreeNode(3, n4_left, n4_right);
let n3_right = new TreeNode(3);
let n2_left = new TreeNode(2, n3_left, n3_right);
let n2_right = new TreeNode(2);
let root2 = new TreeNode(1, n2_left, n2_right);

console.log(isBalanced(root2));