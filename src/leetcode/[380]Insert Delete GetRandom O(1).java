package leetcode;

//Implement the RandomizedSet class:
//
//
// bool insert(int val) Inserts an item val into the set if not present. Returns
// true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns tru
//e if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it
//'s guaranteed that at least one element exists when this method is called). Each
// element must have the same probability of being returned.
//
//
// Follow up: Could you implement the functions of the class with each function
//works in average O(1) time?
//
//
// Example 1:
//
//
//Input
//["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert
//", "getRandom"]
//[[], [1], [2], [2], [], [1], [2], []]
//Output
//[null, true, false, true, 2, true, false, 2]
//
//Explanation
//RandomizedSet randomizedSet = new RandomizedSet();
//randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was insert
//ed successfully.
//randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
//randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contai
//ns [1,2].
//randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly
//.
//randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now cont
//ains [2].
//randomizedSet.insert(2); // 2 was already in the set, so return false.
//randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom
//() will always return 2.
//
//
//
// Constraints:
//
//
// -231 <= val <= 231 - 1
// At most 105 calls will be made to insert, remove, and getRandom.
// There will be at least one element in the data structure when getRandom is ca
//lled.
//
// Related Topics 设计 数组 哈希表
// 👍 220 👎 0

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Random;

// leetcode submit region begin(Prohibit modification and deletion)

/**
 * Notes: HashMap + ArrayList + Random
 * 删除时先交互再删除
 */
class RandomizedSet {
    HashMap<Integer, Integer> hashMap;
    ArrayList<Integer> array;
    Random rand = new Random();

    /** Initialize your data structure here. */
    public RandomizedSet() {
        this.hashMap = new HashMap<>();
        this.array = new ArrayList<>();
    }

    /* Inserts a value to the set. Returns true if the set did not already contain the specified element. */
    public boolean insert(int val){
        if (hashMap.containsKey(val)){
            return false;
        }
        hashMap.put(val, array.size());
        array.add(val);
        return true;
    }

    /** Removes a value from the set. Returns true if the set contained the specified element. */
    public boolean remove(int val) {
        if (!hashMap.containsKey(val)) {
            return false;
        }
        int valIndex = hashMap.get(val);
        swap(valIndex, array.size()-1, array);
        hashMap.put(array.get(valIndex), valIndex);
        hashMap.remove(val, valIndex);
        array.remove(array.size()-1);
        return true;
    }

    /** Get a random element from the set. */
    public int getRandom() {
        return array.get(getRandomNum(array.size()));
    }

    public int getRandomNum(int max) {
        return rand.nextInt(max);
    }

    public static void swap(int i, int j, ArrayList<Integer> array) {
        int temp = array.get(i);
        array.set(i, array.get(j));
        array.set(j, temp);
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */
//leetcode submit region end(Prohibit modification and deletion)