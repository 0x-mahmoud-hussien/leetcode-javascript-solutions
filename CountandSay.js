
// https://leetcode.com/problems/count-and-say?envType=problem-list-v2&envId=string
var countAndSay = function(n) {
    if(n === 1) return '1';

    let result = '1';
    for(let i = 2; i <= n; i++) {
        let prev = result;
        let arr = [];

        let count = 1;
        for(let j = 1; j < prev.length; j++) {
            if(prev[j] === prev[j - 1]) {
                count++;
            } else {
                arr.push(count.toString(), prev[j - 1]);
                count = 1;
            }
        }
        arr.push(count.toString(), prev[prev.length - 1]);
        result = arr.join('');
    }

    return result;
}

console.log(countAndSay(4));
console.log(countAndSay(1));