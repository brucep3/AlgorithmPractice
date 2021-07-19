/**
 * @Description 树状数组
 * @Author PAN Bruce
 * @Date 2021/7/19
 */

/**
 * 树状数组
 */
class BinaryIndexedTree {

    /**
     * 树状数组
     * [1, n]
     * @param n
     */
    constructor(n) {
        this.tr = new Array(n + 1).fill(0);
    }

    /**
     * 修改原数组元素
     * arr[x] += c
     * @param x
     * @param c
     */
    add(x, c) {
        for (let i = x; i; i += this.constructor.lowbit(i)) this.tr[i] += c;
    }

    /**
     * 查询前缀和
     * sum[1, x]
     * @param x
     */
    sum(x) {
        let res = 0;
        for (let i = x; i; i -= this.constructor.lowbit(i)) {
            res += this.tr[i];
        }
        return res;
    }

    /**
     * sum[l, r]
     * @param l
     * @param r
     * @returns {number}
     */
    intervalSum(l, r) {
        return this.sum(r) - this.sum(l - 1);
    }

    /**
     * 通过数组初始化树状数组
     * 确保树状数组长度足够
     * @param arr
     */
    init(arr) {
        const preSum = [0];
        for (const ele of arr) preSum.push(preSum[preSum.length - 1] + ele);
        // (i - lowbit(i), i]
        for (let i = 1; i < this.tr.length; ++i) {
            this.tr[i] = preSum[i] - preSum[i - this.constructor.lowbit(i)];
        }
    }

    /**
     * 返回 x 的最后一个 1 和 1 右边的 0
     * @param x
     * @returns {number}
     */
    static lowbit(x) {
        return x & -x;
    }

}