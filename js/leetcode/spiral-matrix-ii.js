/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const result = [];
    for(let i = 0; i < n; ++i) {
        result.push(new Array(n).fill(0));
    }
    let c = 1;

    const oneRound = (left, right, top, bottom) => {
        if(left > right || top > bottom) return;

        // [top, left] -> [top, right]
        for(let i = left; i <= right; ++i) {
            result[top][i] = c++;
        }
        // [top + 1, right] -> [bottom, right]
        for(let i = top + 1; i <= bottom; ++i) {
            result[i][right] = c++;
        }
        // [bottom, right-1] -> [bottom, left]
        for(let i = right - 1; i >= left; --i) {
            result[bottom][i] = c++;
        }
        // [bottom-1, left] -> [top+1, left]
        for(let i = bottom - 1; i >= top+1; --i) {
            result[i][left] = c++;
        }

        oneRound(left+1, right-1, top+1, bottom-1);
    };

    oneRound(0, n-1, 0, n-1);
    return result;

};