/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const close2Open = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    const stk = [""];

    for (const c of s) {
        if (c === "(" || c === "[" || c === "{") {
            stk.push(c);
        } else {
            if (stk.pop() !== close2Open[c]) return false;
        }
    }

    return stk.pop() === "";
};