/**
 * lc-1711. Count Good Meals (1711. 大餐计数)
 * 读题：和 <= 2 ^ 21
 * 解题思路：哈希表
 * 时间复杂度：O(kn)
 * 空间复杂度：O(n + k)
 * n 为数组长度， k 为二的整数次幂数组的长度 22
 * @param {number[]} deliciousness 0 <= deliciousness[i] <= 2 ^ 20
 * @return {number}
 */
var countPairs = function (deliciousness) {
    const powOfTwo = new Array(22).fill(1).map((val, idx) => val << idx),
        deliCountMap = new Map(),
        MOD = 1e9 + 7;

    let count = 0;
    for (const deli of deliciousness) {
        for (let i = powOfTwo.length - 1; i >= 0; --i) {
            let target = powOfTwo[i] - deli
            if (target < 0) break;
            count = (count + (deliCountMap.get(target) || 0)) % MOD;
        }
        deliCountMap.set(deli, (deliCountMap.get(deli) || 0) + 1);
    }

    return count;
};