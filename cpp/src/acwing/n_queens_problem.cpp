//
// Created by bruce on 2021/6/28.
//

/**
 * AcWing-843. n-皇后问题
 * 题目链接：https://www.acwing.com/problem/content/845/
 */


# include <iostream>

using namespace std;

const int N = 20;

int n ;
char g[N][N];
bool row[N], col[N], dg[N], udg[N];

/**
 * 第 1 种搜索顺序
 * @param u
 */
void dfs(int u) {
    // 找到解决方案
    if (u == n) {
        for (int i = 0; i < n; ++i) puts(g[i]);
        puts("");
        return;
    }

    for (int i = 0; i < n; ++i ) {
        if (!col[i] && !dg[u + i] && !udg[n - u + i]) {
            g[u][i] = 'Q';
            col[i] = dg[u + i] = udg[n - u + i] = true;
            dfs(u + 1);
            // 恢复现场
            col[i] = dg[u + i] = udg[n - u + i] = false;
            g[u][i] = '.';
        }
    }

}


/**
 * 第 2 种搜索顺序
 * @param x
 * @param y
 * @param s
 */
void dfs2(int x, int y, int s) {
    if (y == n) y = 0, x ++;

    if (x == n) {
        if (s == n) {
            for (int i = 0; i < n; i++) puts((g[i]));
            puts("");
        }
        return;
    }

    // 不放皇后
    dfs2(x, y + 1, s);

    // 放皇后
    if (!row[x] && !col[y] && !dg[x + y] && !udg[x - y + n]) {
        g[i][j] = 'Q';
        row[x] = col[y] = dg[x + y] = udg[x - y + n] = true;
        dfs2(x, y + 1, s + 1);
        row[x] = col[y] = dg[x + y] = udg[x - y + n] = false;
    }
}

int main() {
    cin >> n;

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j) {
            g[i][j] = '.';
        }
    }

//    dfs(0);
    dfs2(0, 0, 0);

    return 0;
}
