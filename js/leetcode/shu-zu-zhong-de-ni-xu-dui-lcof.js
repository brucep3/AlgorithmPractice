/**
 * TODO: 非最优解
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    // nums.length < 2
    // nums.length >= 2
    let count = 0;
    for (let i = 1; i < nums.length; ++i) {
        let x = nums[i],
            xx = i;
        for (let j = i - 1; j >= 0; --j) {
            if (nums[j] > x) {
                nums[xx] = nums[j];
                xx = j;
                count++;
            } else {
                break;
            }
        }
        if (xx !== i) nums[xx] = x;
    }
    return count;
};