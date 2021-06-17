/**
 * lc-65. Valid Number
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {

    /**
     * 判断是否是有效小数
     */
    const isDecimal = (s) => {
        if (s.startsWith("+") || s.startsWith("-")) return isUnsignedDecimal(s.slice(1, s.length));
        return isUnsignedDecimal(s);
    };

    /**
     * 判断是否是有效无符号小数
     */
    const isUnsignedDecimal = (s) => {
        if (s.endsWith(".")) {
            return isUnsignedInt(s.slice(0, s.length - 1));
        }
        if (s.startsWith(".")) {
            return isUnsignedInt(s.slice(1, s.length));
        }
        const tokens = s.split(".");
        return tokens.length === 2
            && isUnsignedInt(tokens[0])
            && isUnsignedInt(tokens[1]);
    };

    /**
     * 判断是否是有效整数
     */
    const isInt = (s) => {
        if (s.startsWith("+") || s.startsWith("-")) {
            return isUnsignedInt(s.slice(1, s.length));
        }
        return isUnsignedInt(s);
    };

    /**
     * 判断是否是有效无符号整数
     */
    const isUnsignedInt = (s) => {
        if (s.length === 0) return false;
        for (let i = 0; i < s.length; ++i) {
            if (s.charCodeAt(i) < "0".charCodeAt(0)
                || s.charCodeAt(i) > "9".charCodeAt(0)) {
                return false;
            }
        }
        return true;
    };


    // 根据 e 划分
    // e 前面：小数或整数
    // e 后面：整数
    const tokens = s.split(/[eE]/);
    if (tokens.length === 1) return isDecimal(s) || isInt(s);
    if (tokens.length === 2) {
        return (isDecimal(tokens[0]) || isInt(tokens[0]))
            && isInt(tokens[1]);
    }
    return false;
};

