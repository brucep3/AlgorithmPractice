/**
 * lc-39. Combination Sum (39. 组合总和)
 * 解题思路：DFS
 * @param {number[]} candidates 保证 >= 1
 * @param {number} target 保证 >= 1
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b);

    const resArr = [];

    /**
     * DFS
     * @param r 当前求解 candidates 右边界
     * @param target 当前求解 target
     * @param curRes 当前解
     */
    const dfs = function dfs(r, target, curRes) {
        // 求得一个解
        if (target === 0) resArr.push(curRes.slice());
        // 无解
        if (r < 0 || target < candidates[0]) return;
        // 不缩小范围
        curRes.push(candidates[r]);
        dfs(r, target - candidates[r], curRes);
        curRes.pop();
        // 缩小范围
        dfs(r - 1, target, curRes);
    };

    dfs(candidates.length - 1, target, []);

    return resArr;
};