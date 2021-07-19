//
// Created by bruce on 2021/6/18.
//


/**
 * AcWing-797. 差分
 * 题目链接：https://www.acwing.com/problem/content/799/
 */

#include <iostream>

using namespace std;

const int N = 100010;

int n, m;
int a[N], b[N];

/**
 * 差分的操作：插入，可以用于差分数组初始化
 * @param l
 * @param r
 * @param c
 */
void insert(int l, int r, int c) {
    b[l] += c;
    b[r + 1] -= c;
}

int main() {
    scanf("%d%d", &n, &m);
    for (int i = 1; i <= n; i++) scanf("%d", &a[i]);

    // 假设 A 数组初始全部为 0，差分数组和前缀和数组是一一对应的
    for (int i = 1; i <= n; i++) insert(i, i, a[i]);

    while (m--) {
        int l, r, c;
        scanf("%d%d%d", &l, &r, &c);
        insert(l, r, c);
    }

    for (int i = 1; i <= n; i++) b[i] += b[i - 1];

    for (int i = 1; i <= n; i++) printf("%d ", b[i]);

    return 0;
}