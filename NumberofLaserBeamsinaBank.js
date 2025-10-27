
// https://leetcode.com/problems/number-of-laser-beams-in-a-bank?envType=daily-question&envId=2025-10-27
var numberOfBeams = function(bank){
    let devicesPerRow = [];

    for (let row of bank) {
        let count = 0;
        for (let ch of row) {
            if (ch === '1') count++;
        }
        if (count > 0) devicesPerRow.push(count);
    }

    let beams = 0;
    for (let i = 0; i < devicesPerRow.length - 1; i++) {
        beams += devicesPerRow[i] * devicesPerRow[i + 1];
    }

    return beams;
};

console.log(numberOfBeams(["011001","000000","010100","001000"]));
console.log(numberOfBeams(["000","111","000"]));