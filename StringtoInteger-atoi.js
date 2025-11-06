
// https://leetcode.com/problems/string-to-integer-atoi?envType=problem-list-v2&envId=string
var myAtoi = function(s) {
    s = s.trimStart();

    if (s.length === 0) return 0;

    let sign = 1;
    if (s[0] === '-') {
        sign = -1;
        s = s.slice(1); 
    } else if (s[0] === '+') {
        s = s.slice(1);
    }

    let match = s.match(/^\d+/);   

    if (!match) return 0;  

    let numStr = match[0];   

    numStr = numStr.replace(/^0+/, "");  

    let num = parseInt(numStr) * sign;

    const INT_MIN = -(2 ** 31);   
    const INT_MAX = 2 ** 31 - 1;   

    if (num < INT_MIN) num = INT_MIN;
    if (num > INT_MAX) num = INT_MAX;

    return num;
}

console.log(myAtoi("42"));
console.log(myAtoi(" -042"));
console.log(myAtoi("1337c0d3"));
