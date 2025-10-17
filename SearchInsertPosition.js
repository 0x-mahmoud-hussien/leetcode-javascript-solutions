
// https://leetcode.com/problems/search-insert-position
var searchInsert = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i; // أول رقم أكبر أو يساوي الهدف
        }
    }
    return nums.length; // لو الهدف أكبر من آخر عنصر
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7))