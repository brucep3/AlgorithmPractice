/**
 * lc-1736. Latest Time by Replacing Hidden Digits
 * Solution: Simulation
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
    const [origHr, origMin] = time.split(":");

    let resHr = -1;
    ["1", "2", "3", "9"].forEach((val) => {
        let changeHr = +(origHr.replace("?", val));
        if (changeHr >= 0 && changeHr <= 23) resHr = Math.max(resHr, changeHr);
    });

    if (resHr === -1) resHr = 23;
    if (resHr < 10) resHr = "0" + resHr;

    let resMin = "";
    for (let i = 0, MAX_MINUTE = "59"; i < MAX_MINUTE.length; ++i) {
        resMin += origMin.charAt(i) === "?" ? MAX_MINUTE.charAt(i) : origMin.charAt(i);
    }

    return "" + resHr + ":" + resMin;
};