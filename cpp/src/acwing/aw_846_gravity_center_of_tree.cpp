//
// Created by bruce on 2021/8/16.
//

/**
 * AcWing-846. 树的重心
 * 题目链接：https://www.acwing.com/problem/content/848/
 */

#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 100010, M = 2 * N;
int n, m;
int h[N], e[M], ne[M], idx;
bool st[N];

int ans = N;

void add(int a, int b) {
    e[idx] = b, ne[idx] = h[a], h[a] = idx++;
}

// 以 u 为根的子树中点的数量
int dfs(int u) {
    st[u] = true; // 标记一下，已经被搜过了

    int sum = 1, res = 0;
    for (int i = h[u]; i != -1; i = ne[i]) {
        int j = e[i];
        if (!st[j]) {
            int s = dfs(j);
            res = max(res, s);
            sum += s;
        }
    }

    res = max(res, n - sum);
    ans = min(ans, res);
    return sum;
}

int main() {
    // 输入格式
    // 第一行包含整数 n，表示树的结点数。
    cin >> n;
    // 接下来 n−1 行，每行包含两个整数 a 和 b，表示点 a 和点 b 之间存在一条边。

    memset(h, -1, sizeof h);

    for (int i = 0; i < n; ++i) {
        int a, b;
        cin >> a >> b;
        add(a, b), add(b, a);
    }

    dfs(1);

    // 输出格式
    // 输出一个整数 m，表示将重心删除后，剩余各个连通块中点数的最大值。
    cout << ans << endl;
}