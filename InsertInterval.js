
// https://leetcode.com/problems/insert-interval
var insert = function(intervals, newInterval){
    
    let result = [];

    for(let i = 0; i < intervals.length; i++){
        let start = intervals[i][0];
        let end = intervals[i][1];

        if(end < newInterval[0]){
            result.push([start, end]);
        } else if(start > newInterval[1]){
            result.push(newInterval);
            newInterval = [start, end];
        } else{
            newInterval[0] = Math.min(newInterval[0], start);
            newInterval[1] = Math.max(newInterval[1], end);
        }
    }

    result.push(newInterval);

    return result;
};

console.log(insert([[1,3],[6,9]], [2,5]));
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));