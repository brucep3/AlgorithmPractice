//
// Created by bruce on 2021/6/18.
//

/**
 * AcWing-799. 最长连续不重复子序列
 * 题目链接：https://www.acwing.com/problem/content/801/
 */

#include <iostream>
#include <algorithm>

using namespace std;

const int N = 100010;

int n;
int a[N], s[N];

int main() {
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];

    int res = 0;
    for (int i = 0, j = 0; i < n; i++) {
        s[a[i]]++;
        while (s[a[i]] > 1) {
            s[a[j]]--;
            j++;
        }

        res = max(res, i - j + 1);
    }

    cout << res << endl;

    return 0;
}