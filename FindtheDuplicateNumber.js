
// https://leetcode.com/problems/find-the-duplicate-number
var findDuplicate = function(nums){

    let seen = new Set();
    
    for(let num of nums){
        if(seen.has(num)){
            return num;
        }
        seen.add(num);
    }

    return -1;
}

console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));
console.log(findDuplicate([3,3,3,3,3]));


