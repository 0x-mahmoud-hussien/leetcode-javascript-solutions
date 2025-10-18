
// https://leetcode.com/problems/contains-duplicate-ii
var containsNearbyDuplicate = function(nums, k) {

    const seen = new Set();

    for (let i = 0; i < nums.length; i++) {
        
        if (seen.has(nums[i])) return true;

        seen.add(nums[i]);

        if (seen.size > k) {
            seen.delete(nums[i - k]);
        }
    }

    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));
console.log(containsNearbyDuplicate([1,0,1,1], 1));
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));