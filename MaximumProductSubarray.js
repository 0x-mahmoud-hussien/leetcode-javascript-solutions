
// https://leetcode.com/problems/maximum-product-subarray
var maxProduct = function(nums) {
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];

        let tempMax = maxProd;
        maxProd = Math.max(num, maxProd * num, minProd * num);
        minProd = Math.min(num, tempMax * num, minProd * num);

        result = Math.max(result, maxProd);
    }

    return result;
}

console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1]));