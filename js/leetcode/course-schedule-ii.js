/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let de = new Array(numCourses).fill(0);
    let ma = [];
    let visitSeq = [];

    for (let i = 0; i < numCourses; ++i) {
        ma.push(new Array(numCourses).fill(0));
    }
    // ma[i][j] -> i 指向 j -> j 依赖 i -> 计算j的入度
    for (const preReq of prerequisites) {
        ma[preReq[1]][preReq[0]] = 1;
        de[preReq[0]]++;
    }

    const calDe = (cur) => {
        for (let i = 0; i < numCourses; ++i) {
            if (ma[cur][i] === 1) de[i]--;
        }
    };

    let len = -1;
    while (visitSeq.length !== len) {
        len = visitSeq.length;
        // 取入度为 0 的
        for (let i = 0; i < de.length; ++i) {
            if (de[i] === 0) {
                visitSeq.push(i);
                de[i]--;
                calDe(i);
            }
        }
    }

    if (visitSeq.length === numCourses) return visitSeq;
    return [];
};