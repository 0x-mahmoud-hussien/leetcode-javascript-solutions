
// https://leetcode.com/problems/check-if-object-instance-of-class
var checkIfInstanceOf = function(obj, classFunction) {

    if (typeof classFunction !== "function" || classFunction === null) return false;

    if (obj === null || obj === undefined) return false;
    if (typeof obj !== "object" && typeof obj !== "function") {
        obj = Object(obj);
    }

    let proto = Object.getPrototypeOf(obj); 
    while (proto !== null) {       
        if (proto === classFunction.prototype) return true;
        proto = Object.getPrototypeOf(proto); 
    }

    return false;
};

console.log(checkIfInstanceOf(new Date(), Date)); 
console.log(checkIfInstanceOf(Date, Date));     
console.log(checkIfInstanceOf(5, Number));        
console.log(checkIfInstanceOf(new Map(), Object));
console.log(checkIfInstanceOf(null, Object));     