/**
 * lc-815. Bus Routes (815. 公交路线)
 * 读题：最少乘坐的公交车数量
 * 换乘次数 === 坐过的路线次数 === 乘坐的公交车数量 ， “公交路线” 简称 “公交”
 * 解题思路：BFS
 * BFS 的第 i 步表示 换乘 i 次能到哪些公交
 * 假设第 i 次到达的公交为 cur, 则 routes[cur] 表示第 i 次 能到达哪些站点
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    if (target === source) return 0; // 不需要坐车

    const busMinTrans = new Array(routes.length).fill(-1), // 到公交 i 的最少换乘次数，初始化为 -1
        stationMinTrans = new Map(), // 映射：车站 k -> 到车站 k 的最少换乘次数
        routeTransMap = new Map(); // 映射：车站 k -> 车站 k 可以换乘的公交

    for (let i = 0; i < routes.length; ++i) {
        for (const station of routes[i]) {
            routeTransMap.set(station, (routeTransMap.get(station) || new Set()).add(i));
        }
    }

    // 初始化始发公交
    const queue = [];
    if (routeTransMap.has(source)) {
        for (const nextRouteIdx of routeTransMap.get(source)) {
            queue.push(nextRouteIdx);
            busMinTrans[nextRouteIdx] = 1;
        }
    }

    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; ++i) {
            let cur = queue.shift();
            for (const station of routes[cur]) {
                if (stationMinTrans.has(station)) continue;
                stationMinTrans.set(station, busMinTrans[cur]);
                for (const nextRouteIdx of routeTransMap.get(station)) {
                    if (busMinTrans[nextRouteIdx] === -1) {
                        queue.push(nextRouteIdx);
                        busMinTrans[nextRouteIdx] = busMinTrans[cur] + 1;
                    }
                }
            }
        }
    }

    return stationMinTrans.has(target) ? stationMinTrans.get(target) : -1;
};
