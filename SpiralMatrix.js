
// https://leetcode.com/problems/spiral-matrix
var spiralOrder = function(matrix) {
    let left = 0, top = 0;
    let right = matrix[0].length;
    let bottom = matrix.length;
    let result = [];

    while(left < right && top < bottom) {
        // from left to right
        for(let i = left; i < right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // from top to bottom
        for(let i = top; i < bottom; i++) {
            result.push(matrix[i][right - 1]);
        }
        right--;

        // from right to left
        if(top < bottom) {
            for(let i = right - 1; i >= left; i--) {
                result.push(matrix[bottom - 1][i]);
            }
            bottom--;
        }

        // from bottom to top
        if(left < right) {
            for(let i = bottom - 1; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    return result;
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));