/**
 * 读题：
 * 只包含整数和操作符
 * 整数为 [-200, 200]
 * 操作符为 + - *
 * 解题思路：遇到操作符计算，计算结果压栈
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stk = []; // 保证为 Number
    const ops = new Set()
        .add("+")
        .add("-")
        .add("*")
        .add("/");

    const calByOp = (op, l, r) => {
        let res = null;
        if (op === "+") {
            res = l + r;
        } else if (op === "-") {
            res = l - r;
        } else if (op === "*") {
            res = l * r;
        } else if (op === "/") {
            res = l / r;
            res = Math.sign(res) * Math.floor(Math.abs(res));
        }
        return res;
    };

    for (const token of tokens) {
        if (ops.has(token)) {
            // 先取出来的是操作符右边的数
            let r = stk.pop();
            let l = stk.pop();
            stk.push(calByOp(token, l, r));
        } else {
            stk.push(+token);
        }
    }

    return stk.pop();
};