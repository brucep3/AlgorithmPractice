/**
 * lc-752. Open the Lock （752. 打开转盘锁）
 * 读题：
 * 数字从 0000 开始，因此主要考虑数字的递增次数；
 * 因为可以倒着拨动，所以也需要考虑数字的递减；
 * 一旦某个数字上面递增或者递减都不行，那么这个数字就无法得到
 * 解题思路： BFS
 * 递增：(++ cur + 10) % 10
 * 递减：(-- cur + 10) %10
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    if (target === "0000") return 0;

    const deadendSet = new Set(),
        dxArr = [[1, 0, 0, 0], [-1, 0, 0, 0], [0, 1, 0, 0], [0, -1, 0, 0], [0, 0, 1, 0], [0, 0, -1, 0], [0, 0, 0, 1], [0, 0, 0, -1]],
        queue = [[0, 0, 0, 0]];

    for (const deadend of deadends) deadendSet.add(deadend);

    if (deadendSet.has("0000")) return -1;
    deadendSet.add("0000");

    for (let steps = 1; queue.length; steps++) {
        let len = queue.length;

        for (let i = 0; i < len; ++i) {
            let cur = queue.shift();

            for (const dx of dxArr) {
                let next = cur.map((val, idx) => (cur[idx] + dx[idx] + 10) % 10);
                let nextStr = next.join("");

                if (!deadendSet.has(nextStr)) {
                    if (nextStr === target) return steps;
                    deadendSet.add(nextStr);
                    queue.push(next);
                }
            }
        }
    }

    return -1;
};