/**
 * lc-15.3Sum
 * 解题思路：双指针
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    nums.sort((a, b) => a - b);
    const resArr = [];

    for (let i = 0, pre = 1e7; i < nums.length - 2; pre = nums[i], i++) {
        if (nums[i] === pre) continue;

        let target = -nums[i];

        for (let l = i + 1, r = nums.length - 1; l < r;) {
            if (nums[l] + nums[r] === target) {
                resArr.push([nums[i], nums[l], nums[r]]);
                let tempL = nums[l], tempR = nums[r];
                do l++; while (l < nums.length && nums[l] === tempL) ;
                do r--; while (r >= 0 && nums[r] === tempR) ;
            } else if (nums[l] + nums[r] < target) {
                l++;
            } else {
                // nums[l] + nums[r] > target
                r--;
            }
        }
    }

    return resArr;
};