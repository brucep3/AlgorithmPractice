/**
 * lc-1006 Clumsy Factorial 笨阶乘
 * hint: Math
 * f(n) + [ (n-3) - f(n-2) ] + [ (n-5) - f(n-6) ] + ... +
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
    let n = N;
    let res = 0;
    res += calMulAndDiv(n);
    n -= 3;
    while(n >= 1) {
        res += n;
        n--;
        if(n >= 1) {
            res -= calMulAndDiv(n);
        }
        n -= 3;
    }
    return res;
};

function calMulAndDiv(n) {
    if(n >= 5) return n+1;
    if(n >= 3) return 6;
    if(n === 2) return 2;
    if(n === 1) return 1;
}
