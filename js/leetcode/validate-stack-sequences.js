/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return{boolean}
 */
var validateStackSequences = function (pushed, popped) {
    const stk = [];
    let i = 0;

    for (const pu of pushed) {
        if (pu !== popped[i]) stk.push(pu);
        else {
            // pu == popped[i]
            ++i;
            for (; i < popped.length && stk.length
                   && stk[stk.length - 1] === popped[i]; ++i) {
                stk.pop();
            }
        }
    }

    return i === popped.length;
};