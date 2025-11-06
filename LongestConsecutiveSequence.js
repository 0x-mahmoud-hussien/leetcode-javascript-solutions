
// https://leetcode.com/problems/longest-consecutive-sequence?envType=problem-list-v2&envId=hash-table
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const set = new Set(nums); 
    let longest = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let count = 1;

            while (set.has(current + 1)) {
                current++;
                count++;
            }

            longest = Math.max(longest, count);
        }
    }

    return longest;
}

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
console.log(longestConsecutive([1,0,1,2]));