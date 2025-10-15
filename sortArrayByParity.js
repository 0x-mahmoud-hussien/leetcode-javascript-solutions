
// https://leetcode.com/problems/sort-array-by-parity
var sortArrayByParity = function(nums) 
{
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            result.push(nums[i]);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            result.push(nums[i]);
        }
    }

    return result;
};


let nums = [3, 1, 2, 4];
let sorted = sortArrayByParity(nums);

console.log("input:", nums);
console.log("output:", sorted);