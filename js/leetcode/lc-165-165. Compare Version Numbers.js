/**
 * 165. Compare Version Numbers
 * Solution: Simulation (Split + Parse)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    /**
     * verArr1.length >= verArr2.length
     * @param verArr1
     * @param verArr2
     * @returns {number}
     */
    const compareVersionArr = (verArr1, verArr2) => {
        for (let i = 0; i < verArr2.length; ++i) {
            if (verArr1[i] > verArr2[i]) return 1;
            else if (verArr1[i] < verArr2[i]) return -1;
        }
        for (let i = verArr2.length; i < verArr1.length; ++i) {
            if (verArr1[i] !== 0) return 1;
        }
        return 0;
    };

    const verArr1 = version1.split(".").map(val => +val),
        verArr2 = version2.split(".").map(val => +val);

    if (verArr1.length >= verArr2.length) return compareVersionArr(verArr1, verArr2);
    else return -compareVersionArr(verArr2, verArr1);
};