//
// Created by bruce on 2021/6/10.
//

/**
 * 2. 01背包问题
 * From: https://www.acwing.com/problem/content/2/
 */

#include <iostream>
#include <algorithm>

using namespace std;

const int N = 1010;
int n, m;
int v[N], w[N];
int f[N][N];

/**
 * TODO: 实现并提交
 * TODO: 优化成1维的滚动数组 && 从大到小
 * 滚动数组：2维的数组 -> 轮流使用（通过奇偶性？）
 * 状态表示： dp[i][j]
 * 集合：dp[i][j] 表示从前 i 个物品里面选，占用容量最大为 j 的价值
 * 属性：max
 * 状态计算
 * 集合划分
 * 状态转移
 * @return
 */
int main() {
    cin >> n >> m;

    for (int i = 1; i <= n; i++) cin >> v[i];


    return 0;
}

int simpleSolution() {

}

int optimalSolution() {

}

