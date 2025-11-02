
// https://leetcode.com/problems/find-right-interval?envType=problem-list-v2&envId=sorting
var findRightInterval = function(intervals) {

    let starts = intervals.map((interval, i) => [interval[0], i]);
    starts.sort((a, b) => a[0] - b[0]); 

    let result = [];

    for (let i = 0; i < intervals.length; i++) {
        let end = intervals[i][1];
        let left = 0;
        let right = starts.length - 1;
        let found = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (starts[mid][0] >= end) {
                found = starts[mid][1]; 
                right = mid - 1; 
            } else {
                left = mid + 1;
            }
        }

        result.push(found);
    }

    return result;
};

console.log(findRightInterval([[1,2]]));
console.log(findRightInterval([[3,4],[2,3],[1,2]]));
console.log(findRightInterval([[1,4],[2,3],[3,4]]));