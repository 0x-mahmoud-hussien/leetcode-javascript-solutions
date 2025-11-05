
// https://leetcode.com/problems/minimum-size-subarray-sum?envType=problem-list-v2&envId=array
var minSubArrayLen = function(target, nums) {
    let start = 0;
    let sum = 0;
    let minLen = Infinity;

    for(let end = 0; end < nums.length; end++) {
        sum += nums[end]; 

        while(sum >= target) {
            minLen = Math.min(minLen, end - start + 1);
            sum -= nums[start];
            start++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(4, [1,4,4]));
console.log(minSubArrayLen(1, [1,1,1,1,1,1,1,1]));