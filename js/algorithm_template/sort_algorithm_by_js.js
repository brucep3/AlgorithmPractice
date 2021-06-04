// 排序

/**
 * 排序算法
 * 总共10道题
 * 冒泡排序
 * 快排
 * 插入排序
 * 希尔排序
 * 选择排序
 * 堆排序
 * 归并排序
 * 桶排序
 * Sort List(lc-148),
 * 数组中的逆序对(剑指Offer-51)
 */

/**
 * JavaScript的排序算法：数组长度大于10使用快排，数组长度小于等于10使用插入排序（常数时间小）
 */


/**
 * 快速排序V1：需要额外空间
 */
const quickSortV1 = function quickSort() {

}

// noinspection DuplicatedCode
/**
 * 快排
 * 思想：取一个基准值 x， 调整区间，使得左半边的值全部 <= x ，右半边的值全部 >= x
 * 具体做法：双指针
 * @param {Array} q
 * @param {Number} l
 * @param {Number} r
 */
const quickSortV2 = function quickSort(q, l, r) {
    // 递归退出条件，不要写成 l === r, 可能会出现 l > r 的情况
    if (l >= r) return;

    let pivot = q[l + (r - l >> 1)],
        // 使用 do while，因此初始化在边界外
        i = l - 1,
        j = r + 1;

    while (i < j) {
        do i++; while (q[i] < pivot);
        do j--; while (q[j] > pivot);
        if (i < j) swap(q, i, j);
    }

    quickSort(q, l, j);
    quickSort(q, j + 1, r);

    /**
     * 交换数组元素
     * @param {Array} q
     * @param {number} i
     * @param {number} j
     */
    function swap(q, i, j) {
        let temp = q[i];
        q[i] = q[j];
        q[j] = temp;
    }
};

/**
 * 归并排序
 * @param {Array} q
 * @param {Number} l
 * @param {Number} r
 */
function mergeSort(q, l, r) {

}