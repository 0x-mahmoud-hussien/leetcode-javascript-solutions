
// https://leetcode.com/problems/single-number-ii?envType=problem-list-v2&envId=array
var singleNumber = function(nums) {
    let map = new Map();
    for(let ch of nums) {
        if(map.has(ch)) {
            map.set(ch, map.get(ch) + 1)
        } else {
            map.set(ch, 1);
        }
    }

    for(let [key, value] of map) {
        if(value === 1) {
            return key;
        }
    }
}

console.log(singleNumber([2,2,3,2]));
console.log(singleNumber([0,1,0,1,0,1,99]));