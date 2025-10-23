
// https://leetcode.com/problems/find-the-encrypted-string
var getEncryptedString = function(s, k){
    let result = "";

    for (let i = 0; i < s.length; i++) {

        let newIndex = (i + k) % s.length;
        result += s[newIndex];
    }

    return result;
};

console.log(getEncryptedString("dart", 3)); 
console.log(getEncryptedString("aaa", 1)); 
