// noinspection DuplicatedCode

/**
 * lc-274. H-Index
 * Read the question: citations[i] >= citations.length - i
 * Solution: Sort + Binary Search
 * Time complexity: O(nlogn) || O(n)
 * Space complexity: O(1) || O(n)
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    // sort: quickSort or bucketSort
    citations.sort((a, b) => a - b);

    // left boundary of 2nd half: citations[i] >= citations.length - i
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