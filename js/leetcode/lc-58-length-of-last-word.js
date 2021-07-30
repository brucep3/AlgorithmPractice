/**
 * lc-58. Length of Last Word
 * Solution: Double Point (Fast Slow Point of One Array)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    for (let fast = s.length - 1; fast >= 0; fast--) {
        if (s.charAt(fast) !== " ") {
            let slow = fast
            while (slow >= 0 && s.charAt(slow) !== " ") --slow;
            return fast - slow;
        }
    }

    return 0;
};