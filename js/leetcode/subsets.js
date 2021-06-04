/**
 * 方法一：迭代
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const resArr = [[]];

    nums.forEach(
        val => {
            let len = resArr.length;
            for (let i = 0; i < len; ++i) {
                const temp = [...resArr[i]];
                temp.push(val);
                resArr.push(temp);
            }
        }
    );

    return resArr;

};