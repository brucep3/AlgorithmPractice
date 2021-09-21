//
// Created by bruce on 2021/6/28.
//

/**
 * AcWing-842. 排列数字
 * 题目链接：https://www.acwing.com/problem/content/844/
 */

# include <iostream>

using namespace std;

const int N = 10;

int n ;
int path[N];
bool st[N];

void dfs(int u) {
    if (u == n) {
        for (int i = 0; i < n; ++i) printf("%d ", path[i]);
        printf("\n");
        return;
    }

    for (int i = 1; i <= n; ++i ) {
        if (!st[i]) {
            path[u] = i;
            st[i] = true;
            dfs(u + 1);
            // 恢复现场
            st[i] = false;
        }
    }

}

int main() {
    cin >> n;

    dfs(0);

    return 0;
}
