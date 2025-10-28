
// https://leetcode.com/problems/pascals-triangle-ii
var getRow = function(rowIndex){
    const result = [];

    for(let i = 0; i <= rowIndex; i++){
        const row = [1];
        for(let j = 1; j < i; j++){
            row.push(result[i - 1][j - 1] + result[i - 1][j]);
        }

        if(i > 0) row.push(1);
        result.push(row);
    }

    let row = result[rowIndex];
    return row;
};

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));