package leetcode;

//We have a list of points on the plane. Find the K closest points to the origin
// (0, 0).
//
// (Here, the distance between two points on a plane is the Euclidean distance.)
//
//
// You may return the answer in any order. The answer is guaranteed to be unique
// (except for the order that it is in.)
//
//
//
//
// Example 1:
//
//
//Input: points = [[1,3],[-2,2]], K = 1
//Output: [[-2,2]]
//Explanation:
//The distance between (1, 3) and the origin is sqrt(10).
//The distance between (-2, 2) and the origin is sqrt(8).
//Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
//We only want the closest K = 1 points from the origin, so the answer is just [
//[-2,2]].
//
//
//
// Example 2:
//
//
//Input: points = [[3,3],[5,-1],[-2,4]], K = 2
//Output: [[3,3],[-2,4]]
//(The answer [[-2,4],[3,3]] would also be accepted.)
//
//
//
//
// Note:
//
//
// 1 <= K <= points.length <= 10000
// -10000 < points[i][0] < 10000
// -10000 < points[i][1] < 10000
//
//
// Related Topics 堆 排序 分治算法
// 👍 137 👎 0


import javax.swing.*;
import java.util.*;

//leetcode submit region begin(Prohibit modification and deletion)
class KClosestPointstoOrigin {
    public int[][] kClosest(int[][] points, int K) {
        if (points.length <= K) {
            return points;
        }
        HashMap<int[], Integer> hashMap = new HashMap<>();
        for (int[] point : points) {
            hashMap.put(point, countDis(point[0], point[1]));
        }
        List<Map.Entry<int[], Integer>> list = new LinkedList(hashMap.entrySet());
        Collections.sort(list, getComparator());
        int[][] result = new int[K][2];
        for (int i = 0; i < K; i++) {
            result[i] = list.get(i).getKey();
        }
        return result;
    }

    public static int countDis(int x, int y) {
        return x * x + y * y;
    }

    public static Comparator<Map.Entry<int[], Integer>> getComparator(){
        return new Comparator<Map.Entry<int[], Integer>>() {
            @Override
            public int compare(Map.Entry<int[], Integer> o1, Map.Entry<int[], Integer> o2) {
                if (o1.getValue() > o2.getValue()) {
                    return 1;
                } else if (o1.getValue() < o2.getValue()) {
                    return -1;
                } else {
                    return 0;
                }
            }
        };
    }

//    public static void main(String[] args) {
//        int[][] arr = new int[][]{
//                {1, 2},
//                {10, 3},
//                {1, 4},
//                {2, 2},
//                {1, 2},
//        };
//        KClosestPointstoOrigin s = new KClosestPointstoOrigin();
//        System.out.println(s.kClosest(arr, 2));
//    }
}
//leetcode submit region end(Prohibit modification and deletion)
