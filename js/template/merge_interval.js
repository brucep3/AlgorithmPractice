// noinspection DuplicatedCode

/**
 * @Description
 * 区间合并
 * @Author PAN Bruce
 * @Date 2021/7/25
 */

/**
 * 合并区间
 * @param segArr
 * @param segArr
 * @returns {*[]}
 */
const mergeInterval = (segArr) => {
    segArr.sort((a, b) => a[0] - b[0]);

    const resArr = [];
    let [st, ed] = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

    for (const [l, r] of segArr) {
        if (ed < l) {
            if (st !== Number.MIN_SAFE_INTEGER) resArr.push([st, ed]);
            [st, ed] = [l, r];
        } else ed = Math.max(ed, r);
    }

    if (st !== Number.MIN_SAFE_INTEGER) resArr.push([st, ed]);

    return resArr;
};