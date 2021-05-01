/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    let arr1 = arr.sort( (a, b) => a - b);
    arr1[0] = 1;
    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i] - arr1[i-1] > 1) {
            arr1[i] = arr1[i-1] + 1;
        }
    }
    return arr1[arr1.length-1];
};