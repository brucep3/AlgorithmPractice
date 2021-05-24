/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 1/4 正方形矩阵
    let n = matrix.length;

    /**
     * [i][j] -> [j][n-1-i] ：第i行第j列的数字，在旋转后，变成j行倒数第i个数字的位置
     */
    const rotateByPoint = (i, j) => {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[n-j-1][i];
        matrix[n-j-1][i] = matrix[n-i-1][n-j-1];
        matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
        matrix[j][n-i-1] = temp;
    };

    for(let i = 0; i < Math.floor( n/2 ); ++i) {
        for(let j = 0; j < Math.floor( (n+1)/2 ); ++j) {
            rotateByPoint(i, j);
        }
    }
};