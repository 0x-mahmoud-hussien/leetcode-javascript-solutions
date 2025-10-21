
// https://leetcode.com/problems/reverse-string-ii
var reverseStr = function(s, k){

    let str = s.split('');

    for(let i = 0; i < str.length; i += 2 * k){

        let left = i;
        let right = Math.min(i + k - 1, str.length - 1);
        while(left < right){
            [str[left], str[right]] = [str[right], str[left]];
            left++;
            right--;
        }
    }

    return str.join('');
};

console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcd", 2));