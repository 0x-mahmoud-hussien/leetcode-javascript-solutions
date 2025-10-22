
// https://leetcode.com/problems/rotate-string
var rotateString = function(s, goal){
    return s.length === goal.length && (s + s).includes(goal);
};

console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde",  "abced"));