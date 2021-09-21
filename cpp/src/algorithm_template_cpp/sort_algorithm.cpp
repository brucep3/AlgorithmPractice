//
// Created by bruce on 2021/6/3.
//

/**
 * 快排
 */
void quick_sort(int q[], int l, int r)
{
    if (l >= r) return;

    int i = l - 1, j = r + 1, x = q[l + r >> 1];
    while (i < j)
    {
        do i ++ ; while (q[i] < x); // while (q[++i] < x);
        do j -- ; while (q[j] > x); // while (q[--j] > x);
        if (i < j) swap(q[i], q[j]);
    }
    quick_sort(q, l, j), quick_sort(q, j + 1, r);
}

/**
 * TODO: 归并排序模板
 */
void merge_sort(int q[], int l, int r) {
    if (l >= r) return;

    int mid = l + r >> 1;
    merge_sort(q, l, mid);
    merge_sort(q, mid + 1, r);


}