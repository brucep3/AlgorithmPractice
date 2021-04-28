/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 2) return n;
    let n1 = 1, n2 = 2;
    for(let i = 3; i <= n; ++i) {
        let temp = n1 + n2;
        n1 = n2;
        n2 = temp;
    }
    return n2;
};