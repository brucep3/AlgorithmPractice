/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length < 1) return [];
    // digits.length >= 1
    const m = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    };
    let result = [""];
    for(const d of digits) {
        let temp = [];
        for(const r of result) {
            for(const w of m[d]) {
                temp.push(r + w);
            }
        }
        result = temp;
    }
    return result;
};