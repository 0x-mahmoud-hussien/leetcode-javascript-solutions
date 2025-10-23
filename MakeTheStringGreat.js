
// https://leetcode.com/problems/make-the-string-great
var makeGood = function(s){
    let stack = [];

    for (let ch of s){
        if (stack.length > 0 && Math.abs(stack[stack.length - 1].charCodeAt(0) - ch.charCodeAt(0)) === 32) {
            stack.pop(); 
        } else {
            stack.push(ch); 
        }
    }

    return stack.join('');
};

console.log(makeGood("leEeetcode")); 
console.log(makeGood("abBAcC"));    
console.log(makeGood("s"));