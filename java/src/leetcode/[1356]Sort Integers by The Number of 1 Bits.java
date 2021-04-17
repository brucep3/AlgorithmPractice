package leetcode;

//Given an integer array arr. You have to sort the integers in the array in asce
//nding order by the number of 1's in their binary representation and in case of t
//wo or more integers have the same number of 1's you have to sort them in ascendi
//ng order.
//
// Return the sorted array.
//
//
// Example 1:
//
//
//Input: arr = [0,1,2,3,4,5,6,7,8]
//Output: [0,1,2,4,8,3,5,6,7]
//Explantion: [0] is the only integer with 0 bits.
//[1,2,4,8] all have 1 bit.
//[3,5,6] have 2 bits.
//[7] has 3 bits.
//The sorted array by bits is [0,1,2,4,8,3,5,6,7]
//
//
// Example 2:
//
//
//Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
//Output: [1,2,4,8,16,32,64,128,256,512,1024]
//Explantion: All integers have 1 bit in the binary representation, you should j
//ust sort them in ascending order.
//
//
// Example 3:
//
//
//Input: arr = [10000,10000]
//Output: [10000,10000]
//
//
// Example 4:
//
//
//Input: arr = [2,3,5,7,11,13,17,19]
//Output: [2,3,5,17,7,11,13,19]
//
//
// Example 5:
//
//
//Input: arr = [10,100,1000,10000]
//Output: [10,100,10000,1000]
//
//
//
// Constraints:
//
//
// 1 <= arr.length <= 500
// 0 <= arr[i] <= 10^4
//
// Related Topics 排序 位运算
// 👍 85 👎 0


import java.util.*;

//leetcode submit region begin(Prohibit modification and deletion)
class SortIntegersbyTheNumberof1Bits {
    /**
     * 位运算：n & n -1 可以消去二进制表示的n的最后一个1
     * @param num
     * @return
     */
    public static int count1s(int num) {
        int count = 0;
        while (num > 0) {
            num = num & (num-1);
            count++;
        }
        return count;
    }

    public int[] sortByBits(int[] arr) {
        List<Integer[]> list = new ArrayList<>();
        for (int j : arr) {
            list.add(new Integer[]{j, count1s(j)});
        }
        // 排序
        Comparator<Integer[]> comparator = new Comparator<Integer[]>() {
            @Override
            public int compare(Integer[] o1, Integer[] o2) {
                if (o1[1] > o2[1]) {
                    return 1;
                } else if (o1[1] < o2[1]) {
                    return -1;
                } else if (o1[1] == o2[1] && o1[0] < o2[0]) {
                    return -1;
                } else if (o1[1] == o2[1] && o1[0] > o2[0]) {
                    return 1;
                }
                // o1[1] == o2[1] && o1[0] == o2[0]
                return 0;
            }
        };
        Collections.sort(list, comparator);
        int[] result = new int[arr.length];
        int i = 0;
        for (Integer[] e :
                list) {
            result[i] = e[0];
            i++;
        }
        return  result;
    }

    public static void main(String[] args) {
        int[] arr = new int[]{0, 1, 2, 3, 4, 5, 6, 7, 8};
        SortIntegersbyTheNumberof1Bits s = new SortIntegersbyTheNumberof1Bits();
        System.out.println(s.sortByBits(arr));
    }

}
//leetcode submit region end(Prohibit modification and deletion)

