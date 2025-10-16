
// https://leetcode.com/problems/powx-n
function myPow(x, n) {
    let y = x ** n;
    return parseFloat(y);
}

console.log(myPow(2.00000, 10));   
console.log(myPow(2.10000, 3));    
console.log(myPow(2.00000, -2));  
console.log(myPow(5, 0));     
console.log(myPow(-3, 3));