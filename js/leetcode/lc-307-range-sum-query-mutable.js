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
    this.tr = new BinaryIndexedTree(nums.length);
    this.tr.init(nums);
    this.nums = nums;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
    this.tr.add(index + 1, val - this.nums[index]);
    this.nums[index] = val;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.tr.intervalSum(left + 1, right + 1);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

class BinaryIndexedTree {
    constructor(n) {
        this.tr = new Array(n + 1).fill(0);
    }

    add(x, c) {
        for (let i = x; i; i += this.constructor.lowbit(i)) {
            this.tr[i] += c;
        }
    }

    sum(x) {
        let res = 0;
        for (let i = x; i; i -= this.constructor.lowbit(i)) {
            res += this.tr[i];
        }
        return res;
    }

    intervalSum(l, r) {
        return this.sum(r) - this.sum(l - 1);
    }

    init(arr) {
        const preSum = [0];
        for (const ele of arr) preSum.push(preSum[preSum.length - 1] + ele);
        for (let i = 1; i < this.tr.length; ++i) {
            // [x - lowbit(x) + 1, x]
            this.tr[i] = preSum[i] - preSum[i - this.constructor.lowbit(i)];
        }
    }

    static lowbit(x) {
        return x & -x;
    }
}

