/**
 * lc-645. Set Mismatch (645. 错误的集合)
 * 解题思路：计数排序
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const arr = new Array(nums.length + 1).fill(0);

    for (const num of nums) arr[num]++;

    let repeat = -1, miss = -1;
    arr.forEach((val, idx) => {
        if (val === 0) miss = idx;
        else if (val === 2) repeat = idx;
    });

    return [repeat, miss];
};