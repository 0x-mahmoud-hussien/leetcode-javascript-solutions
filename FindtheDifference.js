
// https://leetcode.com/problems/find-the-difference?envType=problem-list-v2&envId=sorting
var findTheDifference = function(s, t) {
    let xor = 0;

    for (let ch of s) {
        xor ^= ch.charCodeAt(0);
    }

    for (let ch of t) {
        xor ^= ch.charCodeAt(0);
    }

    return String.fromCharCode(xor);
};

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "y"));