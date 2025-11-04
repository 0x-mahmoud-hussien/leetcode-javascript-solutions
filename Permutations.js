
// https://leetcode.com/problems/permutations?envType=problem-list-v2&envId=array
var permute = function(nums) {
    let result = [];

    function helper(path, remaining) {
        if(remaining.length === 0) {
            result.push(path);
            return;
        }

        for(let i = 0; i < remaining.length; i++) {
            helper([...path, remaining[i]], remaining.filter((_, idx) => idx !== i))
        }
    }

    helper([], nums);
    return result;
}

console.log(permute([1,2,3]));
console.log(permute([0,1]));   
console.log(permute([1]));      