/**
 * 双指针：p1位不重复数组长度，此时不重复数组的最大索引为p1-1，p2为当前判断
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 1) return nums.length;
    // nums.length >= 2
    let p1 = 0;
    let p2 = 1;
    for (p2 = 1; p2 <nums.length; ++p2) {
        if (nums[p1] === nums[p2]) {
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