/**
 * TODO: Optimize
 * @param {number[][]} matrix size m x n
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function(matrix, k) {
    const resM = new Array(matrix.length);
    for(let i = 0; i < resM.length; ++i) {
        resM[i] = new Array(matrix.length).fill(0);
    }
    resM[0][0] = matrix[0][0];
    for(let i = 1; i < matrix[0].length; ++i) {
        resM[0][i] = resM[0][i-1] ^ matrix[0][i];
    }
    for(let i = 1; i < matrix.length; ++i ) {
        let temp = 0;
        for(let j = 0; j < matrix[i].length; ++j) {
            temp ^= matrix[i][j];
            resM[i][j] = resM[i-1][j] ^ temp;
        }
    }
    let flatResM = resM.flat().sort((a,b) => b - a);
    return flatResM[k-1];
};