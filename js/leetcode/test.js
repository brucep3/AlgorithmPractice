/**
 * 方法一：BFS + 入度
 * @param {number} numCourses
 * @param {number[][]} prerequisites 想修 prerequisites[i][0] 之前必须先修 prerequisites[i][1] -> prerequisites[i][1] -> prerequisites[i][0]
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let adjMap = new Map();
    let visSeq = [];
    let de = new Array(numCourses).fill(0);

    for(const preReq of prerequisites) {
        de[preReq[0]]++;
        if(adjMap.has(preReq[1])) {
            adjMap.get(preReq[1]).push(preReq[0]);
        } else {
            adjMap.set(preReq[1], new Array( [preReq[0]] ));
        }
    }

    let len = -1;
    while(visSeq.length !== len) {
        len = visSeq.length;
        for(let i = 0; i < de.length; ++i) {
            if(de[i] === 0) {
                de[i]--;
                visSeq.push(i);
                if(adjMap.has(i)) {
                    for(const v of adjMap.get(i)) {
                        de[v]--;
                    }
                }
            }
        }
    }

    return visSeq.length === numCourses;
};

canFinish(
20,
    [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]);