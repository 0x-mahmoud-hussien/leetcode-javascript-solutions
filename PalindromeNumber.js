
// https://leetcode.com/problems/palindrome-number
var isPalindrome = function(x) {

    if (x < 0) return false;

    let copy = x;
    let reversed = 0;

    while (copy > 0) {
        let digit = copy % 10;       
        reversed = reversed * 10 + digit; 
        copy = Math.floor(copy / 10);  
    }


    return x === reversed;
};


console.log(isPalindrome(121));   // ✅ true
console.log(isPalindrome(-121));  // ❌ false
console.log(isPalindrome(10));    // ❌ false
console.log(isPalindrome(1221));  // ✅ true