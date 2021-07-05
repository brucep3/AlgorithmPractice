/**
 * lc-726. Number of Atoms (726. 原子的数量)
 * 读题：
 * 化学式是合法的：（1）原子最长为2；（2）数字可能为2位数
 * 解题思路：栈
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
    // 存储 arr , arr[i] = [atom, count]
    const stk = [[]];

    for (let i = 0, curArr = stk[stk.length - 1]; i < formula.length; ++i) {
        let cur = formula[i];
        // 大写字母
        if (cur >= "A" && cur <= "Z") {
            curArr.push([cur, 1]);
        } else if (cur >= "a" && cur <= "z") {
            // 小写字母： 属于前一个原子
            curArr[curArr.length - 1][0] += cur;
        } else if (Number.isFinite(+cur)) {
            // 数字： 数字可能不止 1 位
            let r = i;
            while (r < formula.length && Number.isFinite(+formula[r])) r++;
            curArr[curArr.length - 1][1] = +formula.slice(i, r);
            i = r - 1;
        } else if (cur === "(") {
            // 开括号： 处理栈
            stk.push([]);
            curArr = stk[stk.length - 1];
        } else if (cur === ")") {
            // 闭括号: 获取数字，处理栈
            let l = i + 1, r = l;
            while (r < formula.length && Number.isFinite(+formula[r])) r++;
            let mul = +formula.slice(l, r) || 1;
            let addArr = stk.pop();
            curArr = stk[stk.length - 1];
            for (const [atom, count] of addArr) {
                curArr.push([atom, count * mul]);
            }
            i = r - 1;
        }
    }

    const resMap = new Map();
    for (const [atom, count] of stk.pop()) {
        resMap.set(atom, (resMap.get(atom) || 0) + count);
    }

    // 结果排序
    const resArr = Array.from(resMap.entries());
    resArr.sort((a, b) => a[0] > b[0] ? 1 : -1);

    return resArr.map(arr => arr[1] === 1 ? arr[0] : arr[0] + arr[1]).join("");
};

