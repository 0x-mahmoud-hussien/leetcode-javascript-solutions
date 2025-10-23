
// https://leetcode.com/problems/sort-colors
var sortColors = function(nums){
    nums.sort((a, b) => a - b);

    return nums;
};

console.log(sortColors([2,0,2,1,1,0]));
console.log(sortColors([2,0,1]));