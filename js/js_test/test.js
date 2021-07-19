/*
 * lc-307. Range Sum Query - Mutable
 * Solution: Binary Indexed Tree
 * Time complexity: O(m·logn)
 * Space complexity: O(n)
 */

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.tr = new Array(nums.length + 1).fill(0);
    this.init(nums);
    this.nums = nums;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
    this.add(index + 1, val - this.nums[index]);
    this.nums[index] = val;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.intervalSum(left + 1, right + 1);
};

NumArray.prototype.add = function(x, c) {
    for (let i = x; i; i += lowbit(i)) {
        this.tr[i] += c;
    }
};

NumArray.prototype.sum = function(x) {
    let res = 0;
    for (let i = x; i; i -= lowbit(i)) {
        res += this.tr[i];
    }
    return res;
};

NumArray.prototype.intervalSum = function(l, r) {
    return this.sum(r) - this.sum(l - 1);
};

NumArray.prototype.init = function(arr) {
    const preSum = [0];
    for (const ele of arr) preSum.push(preSum[preSum.length - 1] + ele);
    for (let i = 1; i < this.tr.length; ++i) {
        // [x - lowbit(x) + 1, x]
        this.tr[i] = preSum[i] - preSum[i - lowbit(i)];
    }
};

const lowbit = function(x) {
    return x & -x;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
