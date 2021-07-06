/**
 * lc-1418. Display Table of Food Orders in a Restaurant (1418. 点菜展示表)
 * 解题思路：哈希表
 * @param {string[][]} orders orders[i]=[customerNamei, tableNumberi, foodItemi]
 * @return {string[][]} Table , 按字母顺序排序的餐品名称
 */
var displayTable = function (orders) {
    const tableFoodMap = new Map(),
        foodIdxMap = new Map();

    for (const [, table, food] of orders) {
        let foodNumMap = tableFoodMap.get(+table) || new Map();
        foodNumMap.set(food, (foodNumMap.get(food) || 0) + 1);
        tableFoodMap.set(+table, foodNumMap);
        foodIdxMap.set(food, 0);
    }

    const foodArr = Array.from(foodIdxMap.keys()).sort((a, b) => a > b ? 1 : -1),
        tableFoodArr = Array.from(tableFoodMap.entries()).sort((a, b) => +a[0] - +b[0]),
        resArr = [Array.of("Table", ...foodArr)];

    foodArr.forEach((val, idx) => foodIdxMap.set(val, idx));

    for (const [table, foodNumMap] of tableFoodArr) {
        let cur = new Array(foodArr.length + 1).fill("0");
        cur[0] = "" + table;
        for (const [food, num] of foodNumMap.entries()) {
            cur[foodIdxMap.get(food) + 1] = "" + num;
        }
        resArr.push(cur);
    }

    return resArr;
};
