
// https://leetcode.com/problems/reverse-vowels-of-a-string
var reverseVowels = function(s) {
    let vowels = 'aeiouAEIOU';
    let arr = s.split('');
    let vowelsList = [];

    for (let ch of arr) {
        if (vowels.includes(ch)) {
            vowelsList.push(ch);
        }
    }

    vowelsList.reverse();

    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            arr[i] = vowelsList[j];
            j++;
        }
    }

    return arr.join('');
};

console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("leetcode"));