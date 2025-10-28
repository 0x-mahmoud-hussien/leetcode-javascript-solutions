
// https://leetcode.com/problems/make-array-elements-equal-to-zero?envType=daily-question&envId=2025-10-28
var countValidSelections = function(nums){
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {

            if (simulate([...nums], i, 1)) {
                count++;
            }

            if (simulate([...nums], i, -1)) {
                count++;
            }
        }
    }
    
    return count;
}

function simulate(nums, curr, direction) {
    
    while (curr >= 0 && curr < nums.length) {
        if (nums[curr] === 0) {
            curr += direction;
        } else {
            nums[curr]--;        
            direction *= -1;       
            curr += direction;    
        }
    }
    
    return nums.every(x => x === 0);
};

console.log(countValidSelections([1,0,2,0,3]));
console.log(countValidSelections([2,3,4,0,4,1,0]));