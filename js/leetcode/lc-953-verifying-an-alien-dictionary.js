/**
 * Solution: Simulation
 * Time Complexity: O(n * m)
 * Space Complexity: O(k)
 * n is the length of words, m is the length of word
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    const orderMap = new Map(order.split("").map((val, idx) => [val, idx])).set("", -1);
    const wordCompare = (prev, cur) => {
        for (let i = 0, j = 0; i < prev.length || j < cur.length; i++, j++) {
            const [prevC, curC] = [i < prev.length ? prev[i] : "", j < cur.length ? cur[j] : ""];
            if (orderMap.get(prevC) < orderMap.get(curC)) return true;
            else if (orderMap.get(prevC) > orderMap.get(curC)) return false;
        }
        return true;
    };

    for (let i = 1; i < words.length; i++) {
        const [prev, cur] = [words[i - 1], words[i]];
        if (!wordCompare(prev, cur)) return false;
    }

    return true;
};