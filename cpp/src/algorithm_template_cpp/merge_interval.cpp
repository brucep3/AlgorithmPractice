//
// Created by bruce on 2021/7/25.
//

/**
 * Ref: https://www.acwing.com/blog/content/277/
 */

/**
 * 将所有存在交集的区间合并
 * @param segs
 */
void merge(vector <PII> &segs) {
    vector <PII> res;

    sort(segs.begin(), segs.end());

    int st = -2e9, ed = -2e9;
    for (auto seg : segs)
        if (ed < seg.first) {
            if (st != -2e9) res.push_back({st, ed});
            st = seg.first, ed = seg.second;
        } else ed = max(ed, seg.second);

    if (st != -2e9) res.push_back({st, ed});

    segs = res;
}