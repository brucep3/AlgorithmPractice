/**
 * 只有一个答案
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let m = new Map();
    for(let i = 0 ; i < nums.length; ++i) {
        let remain = target - nums[i];
        if(m.has(remain)) {
            return [i, m.get(remain)];
        } else{
            m.set(nums[i], i);
        }
    }
};