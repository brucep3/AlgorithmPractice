/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s.startsWith("0")) return 0;
    let f0 = 1, f1 = 1;
    for(let i = 1; i < s.length; ++i) {
        let curCount = 0;
        if(s[i-1] !== "0" && +s.substr(i-1, 2) <= 26) {
            curCount += f0;
        }
        if(s[i] !== "0") {
            curCount += f1;
        }
        f0 = f1;
        f1 = curCount;
    }
    return f1;
};