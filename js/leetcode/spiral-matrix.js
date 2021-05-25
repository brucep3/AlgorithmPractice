/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let resultArr = [];

    const oneRound = (left, right, top, bottom) => {
        if (left > right || top > bottom) return;

        // [top, left] -> [top, right]
        for (let i = left; i <= right; ++i) {
            resultArr.push(matrix[top][i]);
        }
        // [top + 1, right] -> [bottom, right]
        for (let i = top + 1; i <= bottom; ++i) {
            resultArr.push(matrix[i][right]);
        }
        if (top === bottom) return;
        // [bottom, right-1] -> [bottom, left]
        for (let i = right - 1; i >= left; --i) {
            resultArr.push(matrix[bottom][i]);
        }
        if (left === right) return;
        // [bottom-1, left] -> [top+1, left]
        for (let i = bottom - 1; i >= top + 1; --i) {
            resultArr.push(matrix[i][left]);
        }

        oneRound(left + 1, right - 1, top + 1, bottom - 1);
    };


    oneRound(0, matrix[0].length - 1, 0, matrix.length - 1);
    return resultArr;
};