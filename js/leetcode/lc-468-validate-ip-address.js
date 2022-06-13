/**
 * Solution: Simulation (Regular Expression)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
    const isIPV4 = (sArr) => {
        for (const s of sArr) {
            let n = parseInt(s);
            if (n > 255 || n < 0) return false;
            if ("" + n !== s) return false;
        }
        return true;
    };

    const isIPV6 = (sArr) => {
        const regex = /\b[\da-fA-F]{1,4}\b/;
        for (const s of sArr) {
            if (!regex.test(s)) return false;
        }
        return true;
    };

    const sArr = queryIP.split(/[.:]/);
    if (sArr.length === 4 && isIPV4(sArr)) return "IPv4";
    else if (sArr.length === 8 && isIPV6(sArr)) return "IPv6";
    return "Neither";
};