/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 小于等于2个直接返回
    let p1 = 1;
    let p2 = 2;
    for (; p2 <nums.length; ++p2) {
        if (nums[p2] === nums[p1] && nums[p1] === nums[p1-1]) {

        } else {
            p1++;
            swap(nums, p1, p2);
        }
    }
    return p1+1;
};

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
