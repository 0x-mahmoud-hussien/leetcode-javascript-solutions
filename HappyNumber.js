
// https://leetcode.com/problems/happy-number?envType=problem-list-v2&envId=hash-table
var isHappy = function(n) {
    let seen = new Set();

    while(n !== 1 && !seen.has(n)) {
        seen.add(n);
        let sum = 0;
        while(n > 0) {
            let digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }
        n = sum;
    }

    return n === 1;
}

console.log(isHappy(19));
console.log(isHappy(2));