package leetcodeWeeklycontest;

public class Solution {
    public int getMinSwaps(String num, int k) {
        return 0;
    }

    public void nextPermutation(int[] num) {
        int n = num.length;
        if (n < 2) {
            return;
        }
        int index = n - 1;
        //从末尾开始寻找第一个不满足降序的元素 （124653 中找4）
        while (index > 0) {
            if (num[index - 1] < num[index]) {
                break;
            }
            index--;
        }
        if (index == 0) {
            reverseSort(num, 0, n - 1);
            return;
        }
        int val = num[index - 1];
        int j = n - 1;
        //从末尾开始寻找第一个大于已经在第一步中找到的那个元素索引（124653 中找5）
        while (j >= index) {
            if (num[j] > val) {
                break;
            }
            j--;
        }
        //交换这两个元素位置
        swap(num, j, index - 1);
        //逆置之后的元素
        reverseSort(num, index, n - 1);
    }

    public void swap(int[] num, int i, int j) {
        int temp = 0;
        temp = num[i];
        num[i] = num[j];
        num[j] = temp;
    }

    public void reverseSort(int[] num, int start, int end) {
        if (start > end) {
            return;
        }
        for (int i = start; i <= (end + start) / 2; i++) {
            swap(num, i, start + end - i);
        }
    }
}
