/**
 * @Description 树状数组
 * @Author PAN Bruce
 * @Date 2021/7/19
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
     * sum[0 : x] or sum[1 : x + 1]
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

    static lowbit(x) {
        return x & -x;
    }

}