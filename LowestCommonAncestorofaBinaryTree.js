
//leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var lowestCommonAncestor = function(root, p, q) {
    function findLca(node) {
        if (!node) return null;

        if (node === p || node === q) return node;
        const left = findLca(node.left);
        const right = findLca(node.right);
        if (left !== null && right !== null) return node;

        return left !== null ? left : right;
    }

    return findLca(root);
};


let n7_1 = new TreeNode(7);
let n4_1 = new TreeNode(4);
let n6_1 = new TreeNode(6);
let n2_1 = new TreeNode(2, n7_1, n4_1);
let n5_1 = new TreeNode(5, n6_1, n2_1);
let n0_1 = new TreeNode(0);
let n8_1 = new TreeNode(8);
let n1_1 = new TreeNode(1, n0_1, n8_1);
let root1 = new TreeNode(3, n5_1, n1_1);

console.log(lowestCommonAncestor(root1, n5_1, n1_1).val); 

console.log(lowestCommonAncestor(root1, n5_1, n4_1).val); 

let n2_3 = new TreeNode(2);
let root3 = new TreeNode(1, n2_3);
console.log(lowestCommonAncestor(root3, root3, n2_3).val); 