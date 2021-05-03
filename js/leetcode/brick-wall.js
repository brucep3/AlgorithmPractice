/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    let map = new Map();
    for(let line of wall) {
        let cur = 0;
        for(let i = 0; i < line.length - 1; ++i) {
            cur += line[i];
            map.set(cur, (map.get(cur) | 0) + 1);
        }
    }
    let maxGap = 0;
    for(let v of map.values()) {
        maxGap = Math.max(maxGap, v);
    }
    return wall.length - maxGap;
};


