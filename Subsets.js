
// https://leetcode.com/problems/subsets
var subsets = function(nums) {
    let result = [];     
    let current = [];    

    function backtrack(start) {

        result.push([...current]);

        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);   
            backtrack(i + 1);     
            current.pop();          
        }
    }

    backtrack(0);


    return result;
};


console.log(subsets([1,2,3]));

