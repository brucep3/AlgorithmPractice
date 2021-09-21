//
// Created by bruce on 2021/7/19.
//

/**
 * AcWing-241. 楼兰图腾
 * 题目链接: https://www.acwing.com/problem/content/243/
 */

#include <cstdio>
#include <cstring>

using namespace std;

typedef long long LL;

const int N = 200010;

int n;
int a[N];
int tr[N]; // 数字个数
int greaterr[N], lower[N];

int lowbit(int x) {
    return x & -x;
}

void add(int x, int c) {
    for (int i = x; i <= n; i += lowbit(i)) tr[i] += c;
}

int sum(int x) {
    int res = 0;
    for (int i = x; i; i -= lowbit(i)) res += tr[i];
    return res;
}

int main() {
    scanf("%d", &n);

    for (int i = 1; i <= n; i++) scanf("%d", &a[i]);

    for (int i = 1; i <= n; ++i) {
        int y = a[i];
        greaterr[i] = sum(n) - sum(y); // [ y + 1 : n]
        lower[i] = sum(y - 1);
        add(y, 1);
    }

    memset(tr, 0, sizeof tr);
    LL res1 = 0, res2 = 0;
    for (int i = n; i; i--) {
        int y = a[i];
        res1 += greaterr[i] * (LL) (sum(n) - sum(y));
        res2 += lower[i] * (LL) (sum(y - 1));
        add(y, 1);
    }

    printf("%lld %lld\n", res1, res2);

    return 0;
}