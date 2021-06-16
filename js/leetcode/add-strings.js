/**
 * lc-415. Add Strings
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let res = "",
        carry = 0;

    for (let idxOfNum1 = num1.length - 1, idxOfNum2 = num2.length - 1;
         idxOfNum1 >= 0 || idxOfNum2 >= 0;
         idxOfNum1--, idxOfNum2--
    ) {
        let sum = Number(idxOfNum1 >= 0 ? num1[idxOfNum1] : 0)
            + Number(idxOfNum2 >= 0 ? num2[idxOfNum2] : 0) + carry;
        if (sum >= 10) carry = 1;
        else carry = 0;
        sum = sum % 10;
        res = sum + res;
    }

    if (carry === 1) {
        res = "1" + res;
    }

    return res;
};