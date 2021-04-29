/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length === 1) return 0;

    let count = 0, cur, curMax = nums[0], next = 0;
    while(curMax < nums.length - 1) {
        cur = next;
        for(let i = cur + 1; i <= cur + nums[cur]; ++i) {
            if(nums[i] + i >= curMax) {
                curMax = nums[i] + i;
                next = i;
            }
        }
        count++;
    }

    return count + 1;
};