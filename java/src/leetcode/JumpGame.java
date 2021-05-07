package leetcode;
import java.lang.Math;

public class JumpGame {

    class Solution {
        public boolean canJump(int[] nums) {
            int max = 0;
            for (int i = 0; i < nums.length && max >= i; i++) {
                max = Math.max(i + nums[i] , max);
            }
            return max >= nums.length - 1;
        }
    }

    public static void main(String[] args) {
        JumpGame.Solution solution = new JumpGame().new Solution();
        solution.canJump(new int[] {2,3,1,1,4});
    }
}



