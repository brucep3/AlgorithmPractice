/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function (s) {

    const helper = (s, target) => {
        if (+s === target) return true;
        for (let i = 1; i <= s.length; ++i) {
            if (+s.substr(0, i) === target) {
                return helper(s.substr(i), target - 1);
            } else if (+s.substr(0, i) > target) {
                return false;
            }
        }
        return false;
    };

    for (let i = 1; i < s.length; ++i) {
        let cur = +s.substr(0, i);
        if (cur > 0) {
            if (helper(s.substr(i), cur-1)) return true;
        }
    }
    return false;
};

// console.log(splitString("1234"));
// console.log(splitString("050043"));

