/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    if(nums.length <= 2) return true;
    let count = 0;
    if(nums[1] < nums[0]) {
        nums[0] = nums[1];
        count++;
    }
    for(let i = 2; i < nums.length && count <= 1; ++i) {
        if(nums[i] < nums[i-1]) {
            if(nums[i] >= nums[i-2]) {
                nums[i-1] = nums[i];
            } else{
                nums[i] = nums[i-1];
            }
            count++;
        }
    }
    return count <= 1;
};