/**
 * Solution: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
    if (Math.abs(first.length - second.length) > 1) return false;
    let s1, s2;
    if (first.length < second.length) [s1, s2] = [first, second];
    else [s1, s2] = [second, first];
    // Replace
    if (s1.length === s2.length) {
        let count = 0;
        for (let i = 0; i < s1.length; i++) {
            if (s1.charAt(i) !== s2.charAt(i)) count++;
        }
        return count <= 1;
    }
    // s1.length === s2.length - 1
    // Insert or delete
    for (let i = 0; i < s1.length; i++) {
        if (s1.charAt(i) !== s2.charAt(i)) return s1.slice(i, s1.length) === s2.slice(i + 1, s2.length);
    }
    return true;
};