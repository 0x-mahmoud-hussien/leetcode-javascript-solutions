
// https://leetcode.com/problems/check-balanced-string
var isBalanced = function(num){

    let even = 0;
    let odd = 0;

    for(let i = 0; i < num.length; i++){
        if(i % 2 === 0){
            even += Number(num[i]);
        } else{
            odd += Number(num[i]);
        }
    }

    return even === odd;
};

console.log(isBalanced("1234"));
console.log(isBalanced("24123"));
