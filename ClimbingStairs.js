
// https://leetcode.com/problems/climbing-stairs
var climbStairs = function(n){

    if (n === 0) return 1;
    if (n === 1) return 1;
    let prev2 = 1; 
    let prev1 = 1; 
    for (let i = 2; i <= n; i++) {
        let cur = prev1 + prev2; 
        prev2 = prev1;
        prev1 = cur;
    }
    return prev1;
};

console.log(climbStairs(2));
console.log(climbStairs(3));