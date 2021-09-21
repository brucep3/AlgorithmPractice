//
// Created by bruce on 2021/7/26.
//

/**
 * AcWing-895. 最长上升子序列 II
 * 题目链接：https://www.acwing.com/problem/content/description/897/
 * 题解：贪心 + 二分查找
 * 如果比 3 大，则一定比 1 大
 * a[i] 接到 最大的小于 a[i] 的数
 */

#include <iostream>
#include <algorithm>

using namespace std;

const int N = 100010;

int n;
int a[N];
int q[N];

int main() {
    // 输入格式
    // 第一行包含整数 N。
    scanf("%d", &n);
    // 第二行包含 N 个整数，表示完整序列。
    for (int i = 0; i < n; ++i) scanf("%d", &a[i]);

    int len = 0;
    q[0] = -2e9;
    for (int i = 0; i < n; ++i) {
        int l = 0, r = len;
        while (l < r) {
            int mid = l + r + 1 >> 1;
            if (q[mid] < a[i]) l = mid;
            else r = mid - 1;
        }
        len = max(len, r + 1);
        q[r + 1] = a[i];
    }

    // 输出格式
    // 输出一个整数，表示最大长度。
    printf("%d", len);
    return 0;
}
