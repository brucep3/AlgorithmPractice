/**
 * Solution: Boyer-Moore Majority Vote Algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let cand1 = 0, cand2 = 0,
        count1 = 0, count2 = 0;
    nums.forEach(
        val => {
            if (val === cand1) count1++;
            else if (val === cand2) count2++;
            else if (count1 === 0) [cand1, count1] = [val, 1];
            else if (count2 === 0) [cand2, count2] = [val, 1];
            else count1--, count2--;
        }
    );

    count1 = 0, count2 = 0;
    nums.forEach(
        val => {
            if (val === cand1) count1++;
            else if (val === cand2) count2++;
        }
    );

    const resArr = [];
    if (count1 > nums.length / 3) resArr.push(cand1);
    if (count2 > nums.length / 3) resArr.push(cand2);

    return resArr;
};