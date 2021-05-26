/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    const stk = [""];
    for (const ch of s) {
        if (ch === "(") {
            stk.push("");
        } else if (ch === ")") {
            const revPop = stk.pop().split("").reverse().join("");
            stk[stk.length - 1] += revPop;
        } else {
            stk[stk.length - 1] += ch;
        }
    }
    return stk.pop();
};