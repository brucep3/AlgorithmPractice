// noinspection DuplicatedCode

/**
 * lc-275. H-Index II
 * Read the problem: citations[i] >= citations.length - i
 * Solution: Binary Search
 * Time complexity: O(logn)
 * Space complexity: O(1)
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    let l = 0,
        r = citations.length - 1;

    while (l < r) {
        let m = l + r >> 1;
        if (citations[m] >= citations.length - m) r = m;
        else l = m + 1;
    }

    let h = citations.length - l;
    return citations[l] >= h ? h : 0;
};