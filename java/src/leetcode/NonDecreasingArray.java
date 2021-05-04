package leetcode;

/**
 * @author bruce
 */
public class NonDecreasingArray {

    class Solution {
        public boolean checkPossibility(int[] nums) {
            if(nums.length <= 2) {
                return true;
            }
            int count = 0;
            if(nums[1] < nums[0]) {
                count++;
                nums[0] = nums[1];
            }
            for (int i = 2; i < nums.length && count <= 1; i++) {
                if (nums[i] < nums[i-1]) {
                    if (nums[i] >= nums[i-2]) {
                        nums[i-1] = nums[i];
                        count++;
                    } else {
                        nums[i] = nums[i-1];
                        count++;
                    }
                }
            }
            return count <= 1;
        }
    }

}
