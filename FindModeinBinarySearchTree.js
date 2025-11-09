
// https://leetcode.com/problems/find-mode-in-binary-search-tree?envType=problem-list-v2&envId=tree
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var findMode = function(root) {
    if(!root) return [];
    let prev = null;
    let count = 0;
    let maxCount = 0;
    let modes = [];

    function inOrder(node) {
        if(!node) return;
        
        inOrder(node.left);
        if(prev === node.val) {
            count++;
        } else {
            count = 1;
        }

        if(count > maxCount) {
            maxCount = count;
            modes = [node.val];
        } else if(count === maxCount) {
            modes.push(node.val);
        }

        prev = node.val;
        inOrder(node.right);
    }

    inOrder(root);
    return modes;
}

let n2_left = new TreeNode(2);
let n2_root = new TreeNode(2, n2_left, null);
let root1 = new TreeNode(1, null, n2_root);

console.log(findMode(root1));

let root2 = new TreeNode(0);
console.log(findMode(root2));