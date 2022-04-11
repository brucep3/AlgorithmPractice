package test;

import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class TestRandomMethod {

    public static void main(String[] args) {
        new TestRandomMethod().testThreadLocalRandom();
    }


    //    @Test
    public void testRandom() {
        for (int i = 0; i < 10; i++) {
            double random = Math.random();
            System.out.println(random);
        }
    }

    public void testThreadLocalRandom() {
        for (int i = 0; i < 3; i++) {
            new Thread(() -> System.out
                    .println(Thread.currentThread().getName() + ": " +
                            ThreadLocalRandom.current().nextDouble())).start();
        }

    }
}

