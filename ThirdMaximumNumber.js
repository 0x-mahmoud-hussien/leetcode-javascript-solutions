
// https://leetcode.com/problems/third-maximum-number?envType=problem-list-v2&envId=sorting
var thirdMax = function(nums){

    nums = [...new Set(nums)];

    nums.sort((a, b) => b - a);
    if(nums.length >= 3){
        return nums[2];
    }

    return nums[0];
};

console.log(thirdMax([3,2,1]));
console.log(thirdMax([1,2]));
console.log(thirdMax([2,2,3,1]));