/**
 * lc-22. Generate Parentheses
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const resArr = [];

    /**
     * 只要 open >= close，就是有效的括号组合
     * @param open
     * @param close
     * @param curRes
     */
    const backTracking = function bt(open, close, curRes) {
        if (open > n || close > n || close > open) return;
        // open <= n && close <= n && close <= open
        if (open === n && close === n) {
            resArr.push(curRes.join(""));
            return;
        }
        // con1: "("
        curRes.push("(");
        bt(open + 1, close, curRes);
        curRes.pop();
        // con2: ")"
        curRes.push(")");
        bt(open, close + 1, curRes);
        curRes.pop();
    };

    backTracking(0, 0, []);

    return resArr;
};