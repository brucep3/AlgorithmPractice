/**
 * lc-18. 4Sum
 * @param {number[]} nums 数组元素个数 >=
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) return [];
    // 从小到大排序
    nums.sort((a, b) => a - b);

    // nums[i] + nums[j] + nums[l] + nums[r]
    const resArr = [];
    for (let i = 0; i < nums.length - 3;) {
        // 剪枝
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            break;
        }
        if (nums[i] + nums[nums.length - 3] + nums[nums.length - 2] + nums[nums.length - 1] < target) {
            i++;
            continue;
        }
        for (let j = i + 1; j < nums.length - 2;) {
            // 剪枝
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
                break;
            }
            if (nums[i] + nums[j] + nums[nums.length - 2] + nums[nums.length - 1] < target) {
                j++;
                continue;
            }
            // 双指针
            for (let l = j + 1, r = nums.length - 1; l < r;) {
                let curTarget = nums[i] + nums[j] + nums[l] + nums[r];
                if (curTarget === target) {
                    resArr.push([nums[i], nums[j], nums[l], nums[r]]);
                    let curL = nums[l];
                    while (l < nums.length && nums[l] === curL) l++;
                    let curR = nums[r];
                    while (r >= 0 && nums[r] === curR) r--;
                } else if (curTarget < target) {
                    l++;
                } else {
                    r--;
                }
            }
            let curJ = nums[j];
            while (j < nums.length - 2 && nums[j] === curJ) j++;
        }
        let curI = nums[i];
        while (i < nums.length - 3 && nums[i] === curI) i++;
    }

    return resArr;
};