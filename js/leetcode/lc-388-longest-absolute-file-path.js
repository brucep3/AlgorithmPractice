/**
 * 388. Longest Absolute File Path (388. 文件的最长绝对路径)
 * Solution: Simulation
 * Time Complexity: O(n ^ 2)
 * Space Complexity: O(n)
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
    const countTabs = (s) => {
        let idx = s.indexOf("\t");
        if (idx === -1) return 0;
        else return s.lastIndexOf("\t") - idx + 1;
    };

    const countLen = (preArr, ct) => {
        let sum = preArr[0];
        for (let i = 1; i <= ct; ++i) sum += preArr[i] + 1;
        return sum;
    }

    const lines = input.split("\n");
    let prefix = [], max = 0;
    for (const line of lines) {
        let ct = countTabs(line);
        let plainLine = line.slice(ct, line.length);
        if (ct < prefix.length) prefix[ct] = plainLine.length;
        else prefix.push(plainLine.length);
        if (plainLine.indexOf(".") !== -1) {
            max = Math.max(max, countLen(prefix, ct));
        }
    }

    return max;
};