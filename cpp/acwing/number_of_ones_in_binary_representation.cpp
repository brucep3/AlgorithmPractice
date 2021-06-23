//
// Created by bruce on 2021/6/23.
//

/**
 * AcWing-801. 二进制中1的个数
 * 题目链接：https://www.acwing.com/problem/content/803/
 */

#include <iostream>

using namespace std;

int lowbit(int x) {
    return x & -x;
}

int main() {
    int n;
    cin >> n;
    while (n--) {
        int x;
        cin >> x;

        int res = 0;
        while (x) x -= lowbit(x), res++;

        cout << res << " ";
    }

    return 0;
}
