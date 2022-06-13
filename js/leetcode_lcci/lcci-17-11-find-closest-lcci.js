/**
 * Solution: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
    const arr1 = [], arr2 = [];
    words.forEach(
        (val, idx) => {
            if (val === word1) arr1.push(idx);
            else if (val === word2) arr2.push(idx);
        }
    );

    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
        let val1 = i < arr1.length ? arr1[i] : arr1[arr1.length - 1];
        let val2 = j < arr2.length ? arr2[j] : arr2[arr2.length - 1];
        min = Math.min(min, Math.abs(val1 - val2));
        if (i >= arr1.length) {
            j++;
            continue;
        }
        if (j >= arr2.length) {
            i++;
            continue;
        }
        if (val1 < val2) i++;
        else j++;
    }

    return min;
};