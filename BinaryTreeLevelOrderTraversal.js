
// https://leetcode.com/problems/binary-tree-level-order-traversal?envType=problem-list-v2&envId=binary-tree
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var levelOrder = function(root) {
    if(!root) return [];
    const queue = [root];
    const result = [];

    while(queue.length) {
        const levelSize = queue.length;
        const currentLevel = [];

        for(let i = 0; i < levelSize; i++) {
            let curr = queue.shift();
            currentLevel.push(curr.val);

            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
        result.push(currentLevel);
    }

    return result;
}

let n15 = new TreeNode(15);
let n7 = new TreeNode(7);
let n20 = new TreeNode(20, n15, n7);
let n9 = new TreeNode(9);
let root1 = new TreeNode(3, n9, n20);

console.log(levelOrder(root1));