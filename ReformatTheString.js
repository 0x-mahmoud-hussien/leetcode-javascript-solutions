
// https://leetcode.com/problems/reformat-the-string
var reformat = function(s){

    let letters = [];
    let digits = [];

    for(let ch of s){
        if(isNaN(ch)){
            letters.push(ch);
        } else{
            digits.push(ch);
        }
    }

    if(Math.abs(letters.length - digits.length) > 1){
        return '';
    }

    let startWithLetter = letters.length > digits.length;

    let result = [];
    while(letters.length > 0 || digits.length > 0){
        if(startWithLetter && letters.length > 0){
            result.push(letters.shift());
        } else if(!startWithLetter && digits.length > 0){
            result.push(digits.shift());
        }

        startWithLetter = !startWithLetter;
    }

    return result.join('');
};

console.log(reformat("a0b1c2"));
console.log(reformat("leetcode"));
console.log(reformat("1229857369"));