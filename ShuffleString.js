
// https://leetcode.com/problems/shuffle-string
var restoreString = function(s, indices){

    let result = [];

    for(let i = 0; i < s.length; i++){
        let new_index = indices[i];
        result[new_index] = s[i];
    }

    let finalWord = result.join('');

    return finalWord;
}