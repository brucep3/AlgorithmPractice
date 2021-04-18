/**
 * 781. Rabbits in Forest
 * My hint: Math
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    const map = new Map();
    let c = 1;
    for (let i = 0; i < answers.length; ++i) {
        if (map.has(answers[i])) {
            c = map.get(answers[i]) + 1;
            map.set(answers[i], c);
        } else {
            map.set(answers[i], 1);
        }
    }
    let total = 0;
    for (const entry of map) {
        let ans = entry[0];
        let count = entry[1];
        total += Math.ceil(count / (ans + 1)) * (ans+1);
    }
    return total;
};