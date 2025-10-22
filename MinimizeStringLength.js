
// https://leetcode.com/problems/minimize-string-length
var minimizedStringLength = function(s){

    let str = [...new Set(s)].join('');
    return str.length;
};

console.log(minimizedStringLength("aaabc"));
console.log(minimizedStringLength("cbbd"));
console.log(minimizedStringLength("baadccab"));