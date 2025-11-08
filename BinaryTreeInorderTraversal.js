
// https://leetcode.com/problems/binary-tree-inorder-traversal?envType=problem-list-v2&envId=binary-tree
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === null ? null : left);
    this.right = (right === null ? null : right);
}

var inorderTraversal = function(root) {
    const result = [];
    
    function traverse(node) {
        if(!node) return;

        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }

    traverse(root);
    return result;
}


let root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(inorderTraversal(root1)); 

let root2 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5, new TreeNode(6), new TreeNode(7))),
    new TreeNode(3, null, new TreeNode(8, new TreeNode(9), null))
);
console.log(inorderTraversal(root2));  

console.log(inorderTraversal(null));  

console.log(inorderTraversal(new TreeNode(1))); 