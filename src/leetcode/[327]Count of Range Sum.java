package leetcode;
//Given an integer array nums, return the number of range sums that lie in [lowe
//r, upper] inclusive.
//Range sum S(i, j) is defined as the sum of the elements in nums between indice
//s i and j (i ≤ j), inclusive.
//
// Note:
//A naive algorithm of O(n2) is trivial. You MUST do better than that.
//
// Example:
//
//
//Input: nums = [-2,5,-1], lower = -2, upper = 2,
//Output: 3
//Explanation: The three ranges are : [0,0], [2,2], [0,2] and their respective s
//ums are: -2, -1, 2.
//
//
// Constraints:
//
//
// 0 <= nums.length <= 10^4
//
// Related Topics 排序 树状数组 线段树 二分查找 分治算法
// 👍 203 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
class Solution {
    public static int[] t;
    /**
     * 读题：给出上限和下线，计算数组中，坐标连续数组元素的和在上限和下限之间，这样的区间个数
     */
    public int countRangeSum(int[] nums, int lower, int upper) {
        // 建立线段树
        t = new int[nums.length * 4];
        buildTree(nums, 1, 1, t.length);
        return 0;
    }

    /**
     * 建立线段树：后续遍历
     */
    public static void buildTree(int a[], int v, int tl, int tr) {
        if (tl == tr) {
            t[v] = a[tl];
        } else {
            int tm = (tl + tr) / 2;
            buildTree(a, v*2, tl, tm);
            buildTree(a, v*2+1, tm+1, tr);
            t[v] = t[v * 2] + t[v * 2 + 1];
        }

    }
}
//leetcode submit region end(Prohibit modification and deletion)
