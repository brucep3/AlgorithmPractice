//
// Created by bruce on 2021/6/17.
//

/**
 * AcWing-792. 高精度减法
 * 原题链接：https://www.acwing.com/problem/content/794/
 */

#include <iostream>
#include <vector>

using namespace std;

// 判断 A >= B 是否成立
bool cmp(vector<int> &A, vector<int> &B) {
    if (A.size() != B.size()) return A.size() > B.size();
    for (int i = A.size() - 1; i >= 0; i--) {
        if (A[i] != B[i]) return A[i] > B[i];
    }
    return true;
}

// C = A - B
/**
 * C[i] = ( A[i] - B[i] - t + 10) % 10
 * @param A
 * @param B
 * @return
 */
vector<int> sub(vector<int> &A, vector<int> &B) {
    vector<int> C;

    int t = 0;
    for (int i = 0; i < A.size() - 0; i++) {
        t = A[i] - t;
        if (i < B.size()) t -= B[i];
        C.push_back((t + 10) % 10);
        if (t < 0) t = 1;
        else t = 0;
    }

    // 处理前导0
    while (C.size() > 1 && C.back() == 0) C.pop_back();

    return C;
}

int main() {
    string a, b;
    vector<int> A, B;

    cin >> a >> b;
    for (int i = a.size() - 1; i >= 0; i--) A.push_back(a[i] - '0');
    for (int i = b.size() - 1; i >= 0; i--) B.push_back(b[i] - '0');

    vector<int> C;
    if (cmp(A, B)) {
        C = sub(A, B);
    } else {
        C = sub(B, A);
        printf("-");
    }

    for (int i = C.size() - 1; i >= 0; i--) printf("%d", C[i]);

    return 0;
}
