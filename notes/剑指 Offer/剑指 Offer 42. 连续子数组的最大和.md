## 剑指 Offer 42. 连续子数组的最大和：贪心（Kadane算法）

### 解题思路

### 贪心（Kadane算法）

经典贪心问题，可以参看本文末尾维基百科链接 贪心选择性：` curSum[i] = Math.max(curSum[i - 1] + num[i], num[i]) `   
最优子结构：curSum[i] 的最优解包含 curSum[i - 1] 的最优解

### 算法证明

// TODO

### 复杂度分析

时间复杂度： O(n)
空间复杂度： O(1)  
n 为数组长度

### 代码

```javascript
/**
 * 剑指 Offer 42. 连续子数组的最大和
 * Solution: Greedy (Kadane's algorithm)
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} nums nums.length >= 1
 * @return {number}
 */
var maxSubArray = function (nums) {
        let bestSum = Number.MIN_SAFE_INTEGER,
            curSum = 0;

        for (const num of nums) {
            curSum = Math.max(curSum + num, num);
            bestSum = Math.max(curSum, bestSum);
        }

        return bestSum;
    };
```

### 参考

- [最大子数列问题 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E5%88%97%E9%97%AE%E9%A2%98)