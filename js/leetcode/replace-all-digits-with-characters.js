/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let res = "";
    for (let i = 1; i < s.length; i += 2) {
        let c = String.fromCharCode( s.charCodeAt(i-1) + +s.charAt(i) );
        res += s.charAt(i-1) + c;
    }
    if(res.length < s.length) {
        res += s.charAt(s.length-1);
    }
    return res;
};