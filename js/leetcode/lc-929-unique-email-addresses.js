/**
 * Solution: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    const set = new Set();
    const SPLIT = "|";
    for (const email of emails) {
        let [local, domain] = email.split("@");
        local = local.replaceAll(".", "");
        if (local.includes("+")) {
            local = local.slice(0, local.indexOf("+"));
        }
        set.add(local + SPLIT + domain);
    }

    return set.size;
};