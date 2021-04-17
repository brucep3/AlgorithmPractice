package leetcode;//Given two arrays, write a function to compute their intersection.
//
// Example 1:
//
//
//Input: nums1 = [1,2,2,1], nums2 = [2,2]
//Output: [2]
//
//
//
// Example 2:
//
//
//Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//Output: [9,4]
//
//
// Note:
//
//
// Each element in the result must be unique.
// The result can be in any order.
//
//
//
// Related Topics 排序 哈希表 双指针 二分查找
// 👍 273 👎 0


import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;

//leetcode submit region begin(Prohibit modification and deletion)
class IntersectionofTwoArrays {
    public int[] intersection(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        HashSet<Integer> hashSet = new HashSet<>();
        int i, j;
        i = j = 0;
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] == nums2[j]) {
                hashSet.add(nums1[i]);
                ++i;
                ++j;
            } else if (nums1[i] < nums2[j]) {
                ++i;
            } else if (nums1[i] > nums2[j]) {
                ++j;
            }
        }
        int[] result = new int[hashSet.size()];
        i = 0;
        for (Integer e :
                hashSet) {
            result[i++] = e;
        }
        return result;
    }
}
//leetcode submit region end(Prohibit modification and deletion)
