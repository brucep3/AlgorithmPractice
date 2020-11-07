package leetcode;//Design a data structure that supports all following operations in average O(1)
// time.
//Note: Duplicate elements are allowed.
//
//
// insert(val): Inserts an item val to the collection.
// remove(val): Removes an item val from the collection if present.
// getRandom: Returns a random element from current collection of elements. The
//probability of each element being returned is linearly related to the number of
//same value the collection contains.
//
//
//
// Example:
//
//// Init an empty collection.
//RandomizedCollection collection = new RandomizedCollection();
//
//// Inserts 1 to the collection. Returns true as the collection did not contain
// 1.
//collection.insert(1);
//
//// Inserts another 1 to the collection. Returns false as the collection contai
//ned 1. Collection now contains [1,1].
//collection.insert(1);
//
//// Inserts 2 to the collection, returns true. Collection now contains [1,1,2].
//
//collection.insert(2);
//
//// getRandom should return 1 with the probability 2/3, and returns 2 with the
//probability 1/3.
//collection.getRandom();
//
//// Removes 1 from the collection, returns true. Collection now contains [1,2].
//
//collection.remove(1);
//
//// getRandom should return 1 and 2 both equally likely.
//collection.getRandom();
//
// Related Topics 设计 数组 哈希表
// 👍 145 👎 0


import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Random;

//leetcode submit region begin(Prohibit modification and deletion)

class RandomizedCollection {
    HashMap<Integer, HashSet<Integer>> map = new HashMap<>();
    ArrayList<Integer> list = new ArrayList<>();
    Random rand = new Random();

    /** Initialize your data structure here. */
    public RandomizedCollection() {

    }

    /** Inserts a value to the collection. Returns true if the collection did not already contain the specified element. */
    public boolean insert(int val) {
        if (map.containsKey(val)) {
            list.add(val);
            map.get(val).add(list.size()-1);
            return false;
        }
        // 集合中没有
        list.add(val);
        map.put(val, new HashSet<Integer>() {
            {
                add(list.size()-1);
            }
        });
        return true;
    }

    /** Removes a value from the collection. Returns true if the collection contained the specified element. */
    public boolean remove(int val) {
        if (!map.containsKey(val)) {
            return false;
        }
        // 维护map和list
        HashSet<Integer> s = map.get(val);
        if (s != null && !s.isEmpty() && s.iterator().hasNext()) {
            int index = s.iterator().next();
            if (list.get(index) == list.get(list.size() - 1)) {
                // 原地更新
                map.get(val).remove(list.size()-1);
            } else {
                // 交换并更新索引
                swap(index, list.size()-1, list);
                HashSet<Integer> swapS = map.get(list.get(index));
                swapS.remove(list.size()-1);
                swapS.add(index);
                s.remove(index);
            }
            list.remove(list.size()-1);
            if (s.isEmpty()) {
                map.remove(val);
            }
        }
        return true;
    }

    /** Get a random element from the collection. */
    public int getRandom() {
        if (list.size() <= 0) {
            return -1;
        }
        return list.get(rand.nextInt(list.size()));
    }

    public static void swap(int i, int j, ArrayList<Integer> list){
        int temp = list.get(i);
        list.set(i, list.get(j));
        list.set(j, temp);
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * RandomizedCollection obj = new RandomizedCollection();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */
//leetcode submit region end(Prohibit modification and deletion)
