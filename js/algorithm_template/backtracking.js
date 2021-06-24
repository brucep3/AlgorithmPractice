// 回溯

/**
 * 回溯法
 * 0/13道题
 * Subsets I, II(lc-78, 90),
 * Permutations I, II(lc-46, 47),
 * Combination Sum I, II, III, IV(lc-39, 40, 216, 377),
 * Palindrome Partitioning I, II(lc-131, 132),
 * Word Search I, II(lc-79, 212),
 * Restore IP Addresses(lc-93)
 */

/**
 * 回溯法模板
 */
var backTrackingTemplate = function bt() {
    // 回溯中止
    let someCondition; // 回溯中止条件
    if (someCondition) {
        // 处理正确结果和错误结果
        return;
    }

    // 当前可选择哪些结果，并进行回溯
    for (; someCondition;) {
        // 剪枝
        if (someCondition) {

        }
        // !someCondition : dfs
        bt();
        // 回退 dfs
    }

    // 可能回退
}