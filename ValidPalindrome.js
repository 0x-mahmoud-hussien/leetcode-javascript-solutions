
// https://leetcode.com/problems/valid-palindrome
var isPalindrome = function(s){
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while( left < right ){

        if( s[left] !== s[right] ) return false;
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); 
console.log(isPalindrome("race a car"));                    
console.log(isPalindrome(" "));                              