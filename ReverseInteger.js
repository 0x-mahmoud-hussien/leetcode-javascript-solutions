
// https://leetcode.com/problems/reverse-integer
var reverse = function(x){
    
    let rev = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    while( x > 0 ){
        let digit = x % 10;
        rev = rev * 10 + digit;
        x = Math.floor(x / 10);
    }

    rev *= sign;

    return (rev < -2147483648 || rev > 2147483647) ? 0 : rev;
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));