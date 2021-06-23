//
// Created by bruce on 2021/6/18.
//

/**
 * AcWing-794. 高精度除法
 * 题目链接：https://www.acwing.com/problem/content/796/
 * A / b = C -> 将 b 看成一个整体，A 一个一个取值
 */

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

/**
 * C = A / b
 * C[i] = r * 10 + A[i] % b
 * @param A
 * @param b
 * @return
 */
vector<int> div(vector<int> &A, int b, int &r) {
    vector<int> C;

    r = 0; // 余数
    for (int i = A.size() - 1; i >= 0; i--) {
        r = r * 10 + A[i];
        C.push_back(r / b);
        r = r % b;
    }

    reverse(C.begin(), C.end());

    // 去掉前导0
    while (C.size() > 1 && C.back() == 0) C.pop_back();

    return C;
}

int main() {
    string a;
    int b;
    vector<int> A, B;

    cin >> a >> b;
    for (int i = a.size() - 1; i >= 0; i--) A.push_back(a[i] - '0');

    int r;
    auto C = div(A, b, r);

    for (int i = C.size() - 1; i >= 0; i--) printf("%d", C[i]);
    cout << endl << r << endl;

    return 0;
}