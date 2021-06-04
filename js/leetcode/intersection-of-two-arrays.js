/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let resArr = [],
        numsSet1 = new Set(nums1),
        numsSet2 = new Set(nums2);

    for (const n of numsSet1) {
        if (numsSet2.has(n)) {
            resArr.push(n);
        }
    }

    return resArr;
};