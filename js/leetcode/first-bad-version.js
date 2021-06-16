/**
 * lc-278. First Bad Version
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {

        /**
         * 后半段：isBadVersion(mid) === true
         */
        const bs = (l, r) => {
            while (l < r) {
                let mid = l + r >>> 1;
                if (isBadVersion(mid)) r = mid;
                else l = mid + 1;
            }

            return l;
        };

        return bs(1, n);
    };
};