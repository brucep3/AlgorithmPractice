/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;
    for(let i = 0; i < nums.length; ++i) {
        if(nums[i] === val) {
            nums[i] = nums[nums.length-1-count];
            nums[nums.length-1-count] = -1;
            i--;
            count++;
        }
    }
    return nums.length - count;
};