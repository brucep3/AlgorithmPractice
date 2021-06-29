/**
 * lc-46. Permutations (46. 全排列)
 * 解题思路：DFS
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const resArr = [],
        visit = new Array(nums.length).fill(false);

    const dfs = function dfs(curArr) {
        if (curArr.length === nums.length) {
            resArr.push(curArr.slice());
        }

        // curArr.length < nums.length
        for (let i = 0; i < nums.length; ++i) {
            if (!visit[i]) {
                curArr.push(nums[i]);
                visit[i] = true;
                dfs(curArr);
                visit[i] = false;
                curArr.pop();
            }
        }
    };

    dfs([]);

    return resArr;
};