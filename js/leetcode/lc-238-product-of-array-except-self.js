/**
 * 238. Product of Array Except Self
 * Solution: Prefix Sum + Suffix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const prefixProducts = [];
    for (let i = 0, product = 1; i < nums.length; ++i) {
        product *= nums[i];
        prefixProducts.push(product);
    }

    const suffixProducts = new Array(nums.length).fill(0);
    for (let i = nums.length - 1, product = 1; i >= 0; --i) {
        product *= nums[i];
        suffixProducts[i] = product;
    }

    const results = [];
    for (let i = 0; i < nums.length; ++i) {
        const result = (i - 1 >= 0 ? prefixProducts[i - 1] : 1) * (i + 1 < nums.length ? suffixProducts[i + 1] : 1);
        results.push(result);
    }

    return results;
};