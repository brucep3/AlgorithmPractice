//
// Created by bruce on 2021/6/18.
//

/**
 * AcWing-796. 子矩阵的和
 */

#include <iostream>

using namespace std;

const int N = 1000 + 10;

int n, m, q;
int a[N][N], s[N][N];

int main() {
    // 第一行包含三个整数 n，m，q。
    scanf("%d%d%d", &n, &m, &q);
    // 接下来 n 行，每行包含 m 个整数，表示整数矩阵。
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            scanf("%d", &a[i][j]);
        }
    }

    // 二维前缀和
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            s[i][j] = s[i - 1][j] + s[i][j - 1] - s[i - 1][j - 1] + a[i][j];
        }
    }

    // 接下来 q 行，每行包含四个整数 x1,y1,x2,y2，表示一组询问。
    while (q--) {
        int x1, y1, x2, y2;
        scanf("%d%d%d%d", &x1, &y1, &x2, &y2);
        printf("%d\n", s[x2][y2] - s[x2][y1 - 1] - s[x1 - 1][y2] + s[x1 - 1][y1 - 1]);
    }

    return 0;
}

