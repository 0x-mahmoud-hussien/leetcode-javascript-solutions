

var strStr = function(haystack, needle) {
    let m = haystack.length;
    let n = needle.length;

    for(let i = 0; i < m - n + 1; i++) {
        if (haystack.slice(i, i + n) === needle) {
            return i;
        }
    }

    return -1;
}

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));