
/**
 * 高精度算法模板
 * 取值范围：len(A) <= 1e6, a <= 1000
 */

/**
 * 高精度加法：A + B
 * C = A + B, A >= 0, B >= 0
 * 模板题 AcWing-791. 高精度加法
 * @param A
 * @param B
 * @return
 */
vector<int> add(vector<int> &A, vector<int> &B) {
    if (A.size() < B.size()) return add(B, A);

    vector<int> C;
    int t = 0;

    for (int i = 0; i < A.size(); i++) {
        t += A[i];
        if (i < B.size()) t += B[i];
        C.push_back(t % 10);
        t /= 10;
    }

    if (t) C.push_back(t);
    return C;
}

/**
 * 高精度减法：A - B
 * C = A - B, 满足A >= B, A >= 0, B >= 0
 * 模板题 AcWing 792. 高精度减法
 * @param A
 * @param B
 * @return
 */
vector<int> sub(vector<int> &A, vector<int> &B) {
    vector<int> C;
    for (int i = 0, t = 0; i < A.size(); i++) {
        t = A[i] - t;
        if (i < B.size()) t -= B[i];
        C.push_back((t + 10) % 10);
        if (t < 0) t = 1;
        else t = 0;
    }

    while (C.size() > 1 && C.back() == 0) C.pop_back();
    return C;
}


/**
 * 高精度乘低精度：A x a
 * C = A * b, A >= 0, b >= 0
 * 模板题 AcWing 793. 高精度乘法
 * @param A
 * @param b
 * @return
 */
vector<int> mul(vector<int> &A, int b) {
    vector<int> C;

    int t = 0;
    for (int i = 0; i < A.size() || t; i++) {
        if (i < A.size()) t += A[i] * b;
        C.push_back(t % 10);
        t /= 10;
    }

    while (C.size() > 1 && C.back() == 0) C.pop_back();

    return C;
}

// 高精度除法：A ÷ a

/**
 * 高精度除以低精度
 * A / b = C ... r, A >= 0, b > 0
 * 模板题 AcWing 794. 高精度除法
 * @param A
 * @param b
 * @param r
 * @return
 */
vector<int> div(vector<int> &A, int b, int &r) {
    vector<int> C;
    r = 0;
    for (int i = A.size() - 1; i >= 0; i--) {
        r = r * 10 + A[i];
        C.push_back(r / b);
        r %= b;
    }
    reverse(C.begin(), C.end());
    while (C.size() > 1 && C.back() == 0) C.pop_back();
    return C;
}
