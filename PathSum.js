
// https://leetcode.com/problems/path-sum
var hasPathSum = function(root, targetSum) {

    if (!root) return false;

    if (!root.left && !root.right) {
        return root.val === targetSum; 
    }

    return hasPathSum(root.left, targetSum - root.val) ||
           hasPathSum(root.right, targetSum - root.val);
};


let tree = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: { val: 7, left: null, right: null },
            right: { val: 2, left: null, right: null }
        },
        right: null
    },
    right: {
        val: 8,
        left: { val: 13, left: null, right: null },
        right: { val: 4, left: null, right: { val: 1, left: null, right: null } }
    }
};


console.log(hasPathSum(tree, 22)); 
console.log(hasPathSum(tree, 26)); 
console.log(hasPathSum(tree, 18)); 
console.log(hasPathSum(tree, 27)); 