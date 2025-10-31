
// https://leetcode.com/problems/relative-ranks?envType=problem-list-v2&envId=sorting
var findRelativeRanks = function(score){

    let sorted = [...score].sort((a, b) => b - a);

    let rankMap = new Map();

    for (let i = 0; i < sorted.length; i++) {
        if (i === 0) rankMap.set(sorted[i], "Gold Medal");
        else if (i === 1) rankMap.set(sorted[i], "Silver Medal");
        else if (i === 2) rankMap.set(sorted[i], "Bronze Medal");
        else rankMap.set(sorted[i], (i + 1).toString());
    }

    return score.map(num => rankMap.get(num));
};

console.log(findRelativeRanks([5,4,3,2,1]));
console.log(findRelativeRanks([10,3,8,9,4]));