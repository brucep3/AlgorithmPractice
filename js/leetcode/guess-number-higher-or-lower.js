/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return                -1 if num is lower than the guess number
 *                         1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * lc-374. Guess Number Higher or Lower
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {

    const bs = (l, r) => {
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            let res = guess(mid);
            if (res === 0) {
                return mid;
            } else if (res === -1) {
                r = mid - 1;
            } else if (res === 1) {
                l = mid + 1;
            }
        }

        return l;
    };

    return bs(1, n);
};