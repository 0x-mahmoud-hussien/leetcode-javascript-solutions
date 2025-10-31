
// https://leetcode.com/problems/maximum-product-of-three-numbers?envType=problem-list-v2&envId=sorting
var maximumProduct = function(nums){

    nums.sort((a, b) => a - b);
    let product1 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    let product2 = nums[0] * nums[1] * nums[nums.length - 1];

    return Math.max(product1, product2);
};

console.log(maximumProduct([1,2,3]));
console.log(maximumProduct([1,2,3,4]));
console.log(maximumProduct([-1,-2,-3]));