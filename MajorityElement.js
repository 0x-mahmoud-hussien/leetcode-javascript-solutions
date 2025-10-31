
// https://leetcode.com/problems/majority-element?envType=problem-list-v2&envId=sorting
var majorityElement = function(nums) {
    let n = nums.length;
    let m = n / 2;
    let map = new Map();

    for (let ch of nums) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (let [key, value] of map) {
        if (value > m) {
            return key;
        }
    }
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));