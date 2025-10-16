

var mySqrt = function(x){
    if ( x < 0 ) return NaN;

    let result = Math.floor(Math.sqrt(x));
    return result;
}

console.log(mySqrt(8));
console.log(mySqrt(9));
console.log(mySqrt(16));
console.log(mySqrt(0));
console.log(mySqrt(1));