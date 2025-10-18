
// https://leetcode.com/problems/single-number-iii
var singleNumber = function(nums){

    let counts = {};

    for(let num of nums){
        counts[num] = (counts[num] || 0) + 1;
    }

    let result = [];
    for(let num in counts){
        if( counts[num] === 1 ){
            result.push(Number(num));
        }
    }

    return result;
}


console.log(singleNumber([1,2,1,3,2,5]));
console.log(singleNumber([-1,0]));
console.log(singleNumber([0, 1]));