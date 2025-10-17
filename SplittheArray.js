
// https://leetcode.com/problems/split-the-array
var isPossibleToSplit = function(nums) {

    if (nums.length === 0) return true;

    let freq = {};

    for (let num of nums) {

        freq[num] = (freq[num] || 0) + 1;

        if (freq[num] > 2) return false;
    }

    return true;
};


console.log(isPossibleToSplit([1,1,2,2,3,4])); 
console.log(isPossibleToSplit([1,1,1,2]));     
console.log(isPossibleToSplit([5,6,5,7,7,8])); 
console.log(isPossibleToSplit([9,9,9]));       
console.log(isPossibleToSplit([]));            