// 回溯

/**
 * 回溯算法
 * 0/13道题
 * Subsets I, II(lc-78, 90),
 * Permutations I, II(lc-46, 47)
 * Combination Sum I, II, III, IV(lc-39, 40, 216, 377),
 * Palindrome Partitioning I, II(lc-131, 132)
 * Word Search I, II(lc-79, 212)
 * Restore IP Addresses(lc-93)
 */

function backTrackingTemplate() {
    // 回溯中止
    let someCondition = true;
    if(someCondition) {
        // 处理正确结果和错误结果
        return;
    }

    // 当前可选择哪些结果进行回溯
    while (true) {
        backTrackingTemplate();
        // 可选：当前回溯之后处理
    }
}