package leetcode;

import org.omg.PortableInterceptor.INACTIVE;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
//        testArrayList();
//        testHashMap();
        testHashMap2();
    }

    public static void testHashMap() {
        HashMap<Integer, Integer> hashMap = new HashMap<>();
        hashMap.put(0, 0);
        System.out.println(hashMap.size());
        hashMap.remove(0);
        System.out.println(hashMap.size());
    }

    public static void testHashMap2() {
        HashMap<Integer, HashSet<Integer>> map = new HashMap<>();
        map.put(1, null);
        System.out.println(map.get(1));
    }

    public static void testArrayList() {
        ArrayList<Integer> arrayList = new ArrayList<Integer>(10) {
            {
                add(1);
                add(1);
                add(1);
                add(1);
                add(1);
                add(1);
                add(1);
                add(1);
                add(1);
                add(1);
                add(1);
                add(1);
                add(1);
                add(1);
            }
        };
        System.out.println(arrayList.size());
        System.out.println(arrayList.get(5));
        arrayList.set(5, 19);
        System.out.println(arrayList.get(5));
    }
}



