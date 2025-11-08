

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === null ? null : left);
    this.right = (right === null ? null : right);
}

var postorderTraversal = function(root) {
    const result = [];

    function traversal(node) {
        if(!node) return;

        traversal(node.left);
        traversal(node.right);
        result.push(node.val);
    }

    traversal(root);
    return result;
}

let root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null)));
console.log(postorderTraversal(root1));

let n4 = new TreeNode(4);
let n6 = new TreeNode(6);
let n7 = new TreeNode(7);
let n9 = new TreeNode(9);
let n5 = new TreeNode(5, n6, n7);
let n2 = new TreeNode(2, n4, n5);
let n8 = new TreeNode(8, n9, null);
let n3 = new TreeNode(3, null, n8);
let root2 = new TreeNode(1, n2, n3);

console.log(postorderTraversal(root2));