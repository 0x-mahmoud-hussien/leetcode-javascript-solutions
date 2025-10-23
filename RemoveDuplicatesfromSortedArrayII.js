
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii
var removeDuplicates = function(nums){

    let k = 0;
    for (let i = 0; i < nums.length; i++) {

        if (k < 2 || nums[i] != nums[k-2]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));



