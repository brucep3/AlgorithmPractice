## 1711. 大餐计数 ：哈希表

### 解题思路

#### 1. 两数之和

数组中任意两个数arr[i]，arr[j] 之和等于给定目标数 target :   
&emsp; &emsp; ` arr[i] + arr[j] === taget`     
可以参考  [1. 两数之和](https://leetcode-cn.com/problems/two-sum/) ，时间复杂度为 O(n)

#### 2. target : 二的整数次幂

通过题目数据 0 <= deliciousness[i] <= 2 ^ 20 可知数组中任意两个数的和不大于 2 ^ 21：   
&emsp; &emsp; `deliciousness[i] + deliciousness[j] <= 2 ^ 21`   
因此有二的整数次幂数组 powOfTwo 为：  
&emsp; &emsp; ` powOfTwo[i] = 1 << i // i 取值为 [0, 21]`

#### 3. 计数

假设当前元素 arr[cur] 与前置元素 arr[prev] 之和等于二的整数次幂 powOfTwo[i] :      
&emsp; &emsp; ` arr[cur] + arr[prev] === powOfTwo[i] `  
解的个数 count 增加 arr[prev] 在 cur 之前位置中出现的个数：    
&emsp; &emsp; ` count += count(arr[prev]) `

### 复杂度分析

时间复杂度： O(kn)  
空间复杂度： O(n + k)  
n 为数组长度， k 为二的整数次幂数组的长度 22

### 代码

```javascript
/**
 * lc-1711. Count Good Meals (1711. 大餐计数)
 * 读题：和 <= 2 ^ 21
 * 解题思路：哈希表
 * 时间复杂度：O(kn)
 * 空间复杂度：O(n + k)
 * n 为数组长度， k 为二的整数次幂数组的长度 22
 * @param {number[]} deliciousness 0 <= deliciousness[i] <= 2 ^ 20
 * @return {number}
 */
var countPairs = function (deliciousness) {
        const powOfTwo = new Array(22).fill(1).map((val, idx) => val << idx),
            deliCountMap = new Map(),
            MOD = 1e9 + 7;

        let count = 0;
        for (const deli of deliciousness) {
            for (let i = powOfTwo.length - 1; i >= 0; --i) {
                let target = powOfTwo[i] - deli
                if (target < 0) break;
                count = (count + (deliCountMap.get(target) || 0)) % MOD;
            }
            deliCountMap.set(deli, (deliCountMap.get(deli) || 0) + 1);
        }

        return count;
    };
```


