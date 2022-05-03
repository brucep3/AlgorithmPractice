/**
 * 937. Reorder Data in Log Files
 * Solution: Sort
 * Time Complexity: O(n * logn)
 * Space Complexity: O(n)
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
    const isLetterLog = (logContent) => {
        const regex = /^[a-z ]+$/;
        return regex.test(logContent);
    };

    const LTR_TAG = 0, NUM_TAG = 1;
    const formattedLogs = logs.map(
        (val, idx) => {
            let log = {
                type: LTR_TAG,
                tag: "",
                content: "",
                "idx": idx
            };
            let spaceIdx = val.indexOf(" ");
            log.tag = val.slice(0, spaceIdx);
            log.content = val.slice(spaceIdx + 1, val.length);
            if (!isLetterLog(log.content)) log.type = NUM_TAG;
            return log;
        }
    );

    formattedLogs.sort(
        (a, b) => {
            if (a.type !== b.type) return a.type - b.type;
            if (a.type === NUM_TAG) return a.idx - b.idx;
            if (a.type === LTR_TAG) {
                const contentCompareRes = a.content.localeCompare(b.content);
                if (contentCompareRes !== 0) return contentCompareRes;
                else return a.tag.localeCompare(b.tag);
            }
        }
    );

    return formattedLogs.map(
        (val) => val.tag + " " + val.content
    );
};