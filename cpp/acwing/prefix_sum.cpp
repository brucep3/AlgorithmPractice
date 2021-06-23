//
// Created by bruce on 2021/6/18.
//

/**
 * AcWing-795. 前缀和
 * 题目链接：https://www.acwing.com/problem/content/797/
 */

#include <iostream>

using namespace std;

const int N = 100010;

int n, m;
int a[N], s[N];

int main() {
    //    第一行包含两个整数 n 和 m。
    scanf("%d%d", &n, &m);
    //    第二行包含 n 个整数，表示整数数列。
    for (int i = 1; i <= n; i++) scanf("%d", &a[i]);

    for (int i = 1; i <= n; i++) s[i] = s[i - 1] + a[i];

    //    接下来 m 行，每行包含两个整数 l 和 r，表示一个询问的区间范围。
    while (m--) {
        int l, r;
        scanf("%d%d", &l, &r);
        printf("%d\n", s[r] - s[l - 1]);
    }

    return 0;
}
