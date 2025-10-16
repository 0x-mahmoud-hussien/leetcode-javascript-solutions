
// https://leetcode.com/problems/subsets-ii
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b); 
    let result = [];
    let current = [];

    function build(start) {
        result.push([...current]); 

        for (let i = start; i < nums.length; i++) {

            if (i > start && nums[i] === nums[i - 1]) continue;

            current.push(nums[i]);  
            build(i + 1);           
            current.pop();         
        }
    }

    build(0);
    return result;
};


console.log(subsetsWithDup([1,2,2]));