
// https://leetcode.com/problems/largest-number?envType=problem-list-v2&envId=sorting
var largestNumber = function(nums){

    nums = nums.map(String);

    nums.sort((a, b) => (b + a).localeCompare(a + b));

    let result = nums.join('');
    if(result[0] === '0') result = '0';

    return result;
};

console.log(largestNumber([10,2]));
console.log(largestNumber([3,30,34,5,9]));