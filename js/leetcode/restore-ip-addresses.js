/**
 * 读题：输入只包含数字，
 * 输出为结果数组 -> 确定结果正确后加入
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let resultArr = [];

    /**
     * Valid: [0 : 255]
     * @param {string} s
     */
    const isValidIp = (s) => {
        if(s === "0") return true;
        if(s.length > 3 || s.length === 0 || s.startsWith("0")) return false;
        s = +s;
        return s > 0 && s <= 255;
    };

    /**
     * IP合法 && 4个字段
     */
    const backTracking = (s, res) => {
        // 中止回溯
        if(res.length === 3) {
            if(isValidIp(s)) {
                res.push(s);
                resultArr.push(res.join("."));
                res.pop();
                return;
            }
            // IP not valid
            return;
        }
        // 当前少于4个, 分割一个
        for(let i = 1; i <= 3 && i <= s.length; ++i) {
            let curStr = s.slice(0, i);
            if(isValidIp(curStr)) {
                res.push(curStr);
                backTracking(s.slice(i), res);
                res.pop();
            }
        }
    };

    backTracking(s, []);
    return resultArr;

};