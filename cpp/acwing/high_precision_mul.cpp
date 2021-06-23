//
// Created by bruce on 2021/6/18.
//


/**
 * AcWing-793. 高精度乘法
 * 题目链接：https://www.acwing.com/problem/content/795/
 * A x b = C -> 将 b 看成一个整体，A 一个一个取值
 */

#include <iostream>
#include <vector>

using namespace std;

/**
 * C = A * b
 * @param A
 * @param b
 * @return
 */
vector<int> mul(vector<int> &A, int b) {
    vector<int> C;

    int t = 0; // 进位
    for (int i = 0; i < A.size(); i++) {
        t = A[i] * b + t;
        C.push_back(t % 10);
        t /= 10;
    }

    while (t != 0) {
        C.push_back(t % 10);
        t /= 10;
    }

    while (C.size() > 1 && C.back() == 0) C.pop_back();

    return C;
}

int main() {
    string a;
    int b;
    vector<int> A, B;

    cin >> a >> b;
    for (int i = a.size() - 1; i >= 0; i--) A.push_back(a[i] - '0');

    auto C = mul(A, b);

    for (int i = C.size() - 1; i >= 0; i--) printf("%d", C[i]);

    return 0;
}