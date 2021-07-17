/**
 * TODO: 优化
 * lc-131. Palindrome Partitioning
 * Solution: DFS +
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const arr = s.split(""),
        resArr = [];

    const palMap = new Map();
    const isPal = (s) => {
        if (palMap.get(s)) return palMap.get(s);

        let l = 0, r = s.length - 1;
        for (; l < r; l++, r--) {
            if (s.charAt(l) !== s.charAt(r)) {
                palMap.set(s, false);
                return false;
            }
        }

        palMap.set(s, true);

        return true;
    };

    const dfs = function dfs(i, curRes) {
        // result
        if (i === arr.length) {
            if (isPal(curRes[curRes.length - 1])) resArr.push(curRes.slice());
            return;
        }

        // DFS
        if (curRes.length) {
            curRes[curRes.length - 1] += arr[i];
            dfs(i + 1, curRes);
            curRes[curRes.length - 1] = curRes[curRes.length - 1].slice(0, curRes[curRes.length - 1].length - 1);
        }

        if (curRes.length && !isPal(curRes[curRes.length - 1])) return;

        curRes.push(arr[i]);
        dfs(i + 1, curRes);
        curRes.pop();
    };

    dfs(0, []);

    return resArr;
};