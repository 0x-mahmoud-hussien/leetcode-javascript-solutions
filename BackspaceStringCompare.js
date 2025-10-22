
// https://leetcode.com/problems/backspace-string-compare
var backspaceCompare = function(s, t){

    let result = [];

    for(let char of s){
        if(char === '#'){
            result.pop();
        } else{
            result.push(char);
        }
    }

    let stack = [];

    for(let char of t){
        if(char === '#'){
            stack.pop();
        } else{
            stack.push(char);
        }
    }

    return result.join('') === stack.join('');
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##",  "c#d#"));
console.log(backspaceCompare("a#c", "b"));