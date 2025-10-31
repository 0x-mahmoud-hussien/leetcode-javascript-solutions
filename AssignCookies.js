
// https://leetcode.com/problems/assign-cookies?envType=problem-list-v2&envId=sorting
var findContentChildren = function(g, s){

    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);

    let i = 0;
    let j = 0;

    let count = 0;
    while(i < g.length && j < s.length){
        if(s[j] >= g[i]){
            count++;
            i++;
            j++;
        } else{
            j++;
        }
    }

    return count;
};

console.log(findContentChildren([1,2,3], [1,1]));
console.log(findContentChildren([1,2], [1,2,3]));