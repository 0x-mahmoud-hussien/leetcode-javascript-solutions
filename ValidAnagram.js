
// https://leetcode.com/problems/valid-anagram?envType=problem-list-v2&envId=sorting
var isAnagram = function(s, t){

    if(s.length !== t.length) return false;

    s = s.toLowerCase().split('').sort().join('');
    t = t.toLowerCase().split('').sort().join('');

    return s === t;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));