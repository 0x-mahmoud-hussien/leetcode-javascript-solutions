
// https://leetcode.com/problems/filter-elements-from-array 
var filter = function(arr, fn) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }

    return result;
}

let arr1 = [0, 10, 20, 30];
function fn1(n) { return n > 10; }
console.log(filter(arr1, fn1));

let arr2 = [1, 2, 3];
function fn2(n, i) { return i === 0; }
console.log(filter(arr2, fn2)); 

let arr3 = [-2, -1, 0, 1, 2];
function fn3(n) { return n + 1; }
console.log(filter(arr3, fn3)); 