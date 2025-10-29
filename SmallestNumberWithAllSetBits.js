
// https://leetcode.com/problems/smallest-number-with-all-set-bits?envType=daily-question&envId=2025-10-29
var smallestNumber = function(n){
    let k = 1;
    let x = (2 ** k) - 1;

    while (x < n) {
        k++;
        x = (2 ** k) - 1;
    }

    return x;
};

console.log(smallestNumber(5));
console.log(smallestNumber(10));
console.log(smallestNumber(3));