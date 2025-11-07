
// https://leetcode.com/problems/maximum-swap
var maximumSwap = function(num) {
    let arr = num.toString().split('');
    let last = new Array(10);

    for(let i = 0; i < arr.length; i++) {
        last[arr[i]] = i;
    }

    for(let i = 0; i < arr.length; i++) {
        for(let d = 9; d > arr[i]; d--) {
            if(last[d] > i) {
                [arr[i], arr[last[d]]] = [arr[last[d]], arr[i]];
                return Number(arr.join(''));
            }
        }
    }

    return num;
};

console.log(maximumSwap(2736));
console.log(maximumSwap(9973));