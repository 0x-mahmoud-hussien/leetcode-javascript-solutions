
// https://leetcode.com/problems/length-of-last-word
var lengthOfLastWord = function(s){
    s = s.trim().split(' ');
    let lastWord = s[s.length - 1];
    return lastWord.length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
