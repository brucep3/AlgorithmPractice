//
// Created by bruce on 2021/6/8.
//

//
/**
 * AcWing-898. 数字三角形
 * 题目链接：https://www.acwing.com/problem/content/900/
 */

#include <algorithm>

using namespace std;

const int N = 1e3;
const int INF = 1e9;

int n;
int q[N][N];
int dp[N][N];

int main() {
    scanf("%d", &n);

    for (int i = 0, len = 1; i < n; ++i, ++len) {
        for (int j = 0; j < len; ++j) {
            scanf("%d", &q[i][j]);
        }
    }

    for (int i = 1; i <= n; i++) {
        for (int j = 0; j <= i + 1; j++) {
            dp[i][j] = -INF;
        }
    }

    for (int i = 0, len = 1; i < n; ++i, ++len) {
        for (int j = 0; j < len; ++j) {
            dp[i + 1][j + 1] = max(dp[i][j], dp[i][j + 1]) + q[i][j];
        }
        dp[i + 1][len + 1] = dp[i + 1][len];
    }

    int res = -INF;
    for (int i = 0; i < n + 1; ++i) {
        res = max(res, dp[n][i]);
    }

    printf("%d\n", res);

    return 0;
}