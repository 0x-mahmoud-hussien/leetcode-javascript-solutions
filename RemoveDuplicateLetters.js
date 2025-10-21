
// https://leetcode.com/problems/remove-duplicate-letters
var removeDuplicateLetters = function(s){

    let result = [];        
    let seen = new Set(); 
    let last = {};          

    for(let i = 0; i < s.length; i++) {
        last[s[i]] = i;
    }

    for(let i = 0; i < s.length; i++) {
        let c = s[i];

        if (seen.has(c)) continue;


        while(
            result.length > 0 &&
            c < result[result.length - 1] &&
            i < last[result[result.length - 1]]
        ) {
            seen.delete(result.pop());
        }

        result.push(c);
        seen.add(c);
    }

    return result.join('');
};

console.log(removeDuplicateLetters('bcabc'));
console.log(removeDuplicateLetters("cbacdcbc"));