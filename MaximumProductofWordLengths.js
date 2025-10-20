
// https://leetcode.com/problems/maximum-product-of-word-lengths
var maxProduct = function(words) {

    const masks = new Array(words.length).fill(0);
    const lens  = new Array(words.length).fill(0);

    for (let i = 0; i < words.length; i++) {
        let mask = 0;
        for (let ch of words[i]) {
            mask |= 1 << (ch.charCodeAt(0) - 97); 
        }
        masks[i] = mask;
        lens[i]  = words[i].length;
    }

    let max_product = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if ((masks[i] & masks[j]) === 0) {
                let product = lens[i] * lens[j];
                if (product > max_product) max_product = product;
            }
        }
    }

    return max_product;
};

console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]))