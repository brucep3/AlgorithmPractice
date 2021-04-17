/**
 * 注意：需证明
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort(
        function (n1, n2) {
            let res1 = String(n1) + String(n2);
            let res2 = String(n2) + String(n1);
            return Number(res2) - Number(res1);
        }
    );
    return nums[0] === 0 ? "0" : nums.join("");
};