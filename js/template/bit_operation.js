// 位运算

/**
 * 位运算
 * 总共8道题；
 * lc-191, 剑指Offer-15. Number of 1 Bits ,
 * Majority Element(lc-169, 与剑指Offer-39相同),
 * Single Number I, II, III(lc-136, 137, 260),
 * Counting Bits(lc-338),
 * Hamming Distance(lc-461),
 * 不用加减乘除做加法(剑指Offer-65)
 */

/**
 * 位运算满足交换律，不满足结合律和分配律；
 * 当题目限定额外空间 O(1) ，且限定时间复杂度为 O(n) 时，考虑位运算
 *
 * 按位与: & ,
 *          性质（1） n & n = n;
 * 按位或: | ,
 *          性质（1）n | 0 = n；
 *          性质（2）n | n = n；
 * 按位异或: ^ ,
 *          性质（1）n ^ n = 0；
 *          性质（2）0 ^ n = n；
 *          性质（3）满足交换律；
 *          性质（4）满足结合律；
 *          性质（5） a ^ b = c, a ^ c = b
 * 按位非: ~
 * 左移: <<
 * 右移: >>
 * 无符号右移: >>>
 *
 * 常用的位运算操作：
 * - 求 n 的第 k 位数字 : n >> k & 1
 * - 返回n的最后一位 1：lowbit(n) = n & (~n + 1) =  n & -n
 */

/**
 * 返回 n 的最后一个 1
 * 消除 n 的最后一个 1 : n -= lowbit(n)
 * @param n
 * @returns {number}
 */
const lowbit = n => {
    return n & -n;
};

