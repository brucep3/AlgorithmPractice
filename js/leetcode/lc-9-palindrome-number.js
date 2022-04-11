/**
 * 9. Palindrome Number (9. 回文数)
 * Read the Problem: Simulation
 * Solution: Simulation
 * Time Complexity: O(logn)
 * Space Complexity: O(logn)
 * n is the length of x
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;

    const arr = [];
    for (; x;) {
        arr.push(x % 10);
        x = Math.floor(x / 10);
    }

    for (let i = 0; i < arr.length / 2; ++i) {
        if (arr[i] !== arr[arr.length - 1 - i]) return false;
    }

    return true;
};