/**
 * 剑指 Offer 57 - II. 和为s的连续正数序列
 * 解题思路：双指针（一个序列快慢指针）
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    const resArr = [];

    // [slow, fast] -> (slow + fast) * (fast - slow + 1) / 2
    for (let slow = 1, fast = 2; fast <= (target + 1 >> 1); ++fast) {
        let curSum = (slow + fast) * (fast - slow + 1) / 2;
        // slow 右移
        while (curSum > target) curSum -= slow++;
        // 找到解
        if (curSum === target) {
            let temp = slow - 1;
            resArr.push(
                new Array(fast - slow + 1).fill(0).map(() => ++temp));
        }
    }

    return resArr;
};
