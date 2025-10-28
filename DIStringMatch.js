
// https://leetcode.com/problems/di-string-match
var diStringMatch = function(s) {
    let result = [];
    let low = 0;             
    let high = s.length;      

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I') {
            result.push(low);  
            low++;            
        } else { 
            result.push(high);
            high--;            
        }
    }

    result.push(low); 
    return result;
};

console.log(diStringMatch("IDID"));
console.log(diStringMatch("III"));
console.log(diStringMatch("DDI"));