/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canEat = function (candiesCount, queries) {
    // sum[i] 表示前i类糖果的总个数，要吃到第i类糖果，需要吃 sum[i-1] 个糖果
    const sum = [candiesCount[0]];
    for (let i = 1; i < candiesCount.length; ++i) {
        sum.push(sum[sum.length - 1] + candiesCount[i]);
    }

    // 每天不超过 dailyCap 的情况前提下，在 favoriteDay 天吃不到第 favoriteType 类糖果
    const canNotEat = (type, day, cap) => {
        const dayCount = day + 1;
        // 吃不到情况1：吃再多也没用 -> type 太大
        let maxEat = type > 0 ? cap * dayCount <= sum[type - 1] : 0;
        // 吃不到情况2：吃再少也没用 -> type 太小
        let minEat = 1 * dayCount > sum[type];
        return maxEat || minEat;
    };

    const ansArr = [];
    for (const query of queries) {
        if (canNotEat(...query)) {
            ansArr.push(false);
        } else {
            ansArr.push(true);
        }
    }

    return ansArr;
};