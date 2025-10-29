
// https://leetcode.com/problems/increasing-decreasing-string
var sortString = function(s){

    let result = '';
    let arr = s.split('');

    while(arr.length){

        arr.sort();
        let up = [...new Set(arr)];
        result += up.join('');
        up.forEach(ch => arr.splice(arr.indexOf(ch), 1));

        arr.sort().reverse();
        let down = [...new Set(arr)];
        result += down.join('');
        down.forEach(ch => arr.splice(arr.indexOf(ch), 1));
    }

    return result;
};

console.log(sortString("aaaabbbbcccc"));
console.log(sortString("rat"));
