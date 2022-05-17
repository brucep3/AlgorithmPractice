/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
    const nextStrs = (str) => {
        const res = [];
        for (let i = 0; i < str.length; ++i) {
            for (const c of ["A", "C", "G", "T"]) {
                let next = str.slice(0, i) + c + str.slice(i + 1, str.length);
                if (next !== str) res.push(next);
            }
        }
        return res;
    };

    const visitedMap = new Map(bank.map(val => [val, false])),
        queue = [start];

    if (start === end) return 0;
    if (!visitedMap.has(end)) return -1;

    for (let steps = 0; queue.length; steps++) {
        let n = queue.length;
        for (let i = 0; i < n; i++) {
            let cur = queue.shift();
            const nextStrArr = nextStrs(cur);
            for (let next of nextStrArr) {
                if (next === end) return steps + 1;
                if (!visitedMap.has(next) || visitedMap.get(next)) continue;
                visitedMap.set(next, true);
                queue.push(next);
            }
        }
    }

    return -1;
};