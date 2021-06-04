/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    const resArr = [[]];

    let start = 0, dupStart = 0, pre = -11;
    for (let i = 0; i < nums.length; pre = nums[i++]) {
        // 重复，从起点开始
        if (nums[i] === pre) {
            start = dupStart;
        } else {
            start = 0;
        }

        let len = resArr.length;
        for (let j = start; j < len; ++j) {
            const temp = [...resArr[j]];
            temp.push(nums[i]);
            resArr.push(temp);
        }

        dupStart = len;
    }

    return resArr;
};