/**
 * 两次bs：第1次在首行，第2次在行内；
 * 注意：二分查找的中间点 -> TODO: 优化
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length < 1 || matrix[0].length < 1) return false;
    // 在行首bs
    let low = 0, high = matrix.length - 1, mid = Math.floor(low + (high - low) / 2);;
    // 最后只剩2行：low和high
    while (low < high && low !== mid) {
        // mid的上1层
        if (target < matrix[mid][0]) {
            high = mid - 1;
        } else if (target >= matrix[mid][0]) {
            low = mid;
        }
        mid = Math.floor(low + (high - low) / 2);
    }
    // 在high行中bs
    if (target >= matrix[high][0]) {
        return matrix[high].includes(target);
    }
    // 在mid行中bs
    return matrix[mid].includes(target);
};

