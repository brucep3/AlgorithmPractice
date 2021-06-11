/**
 * lc-11. Container With Most Water
 * 读题：容量最小为 0
 * 解题思路：双指针
 * 容量计算：(r - l ) * Min( height[l], height[r] )
 * 双指针移动：小的那一边移动
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;

    for (let l = 0, r = height.length - 1, maxL = 0, maxR = height.length - 1;
         l < r;) {
        if (height[l] > height[maxL]) {
            maxL = l;
        }
        if (height[r] > height[maxR]) {
            maxR = r;
        }
        max = Math.max((maxR - maxL) * Math.min(height[maxL], height[maxR]), max);

        // 移动
        if (height[maxL] < height[maxR]) l++;
        else r--;
    }

    return max;
};