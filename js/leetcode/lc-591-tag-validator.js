/**
 * 591. Tag Validator (591. 标签验证器)
 * Solution: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * n is the length of code
 * @param {string} code
 * @return {boolean}
 */
var isValid = function (code) {
    const codeArr = code.split(""),
        stk = [];

    const getCData = (codeArr, idx) => {
        const startTag = "<![CDATA[", endTag = "]]>";
        if (codeArr.length - idx < startTag.length + endTag.length) return idx;
        for (let i = idx, j = 0; i < codeArr.length && j < startTag.length; i++, j++) {
            if (codeArr[i] !== startTag.charAt(j)) return idx;
        }
        for (let i = idx + startTag.length; i < codeArr.length - 3; ++i) {
            if (codeArr.slice(i, i + 3).join("") === endTag) return i + 3;
        }
        return idx;
    };

    const getTagName = (codeArr, idx) => {
        for (let i = idx; i < codeArr.length; ++i) {
            if (codeArr[i] === ">") return i;
        }
        return idx;
    };

    const isValidTagName = (tagName) => {
        if (tagName.length > 9) return false;
        const regex = /^[A-Z]+$/;
        return regex.test(tagName);
    };

    const cdataTag = "cdata", startTag = "start_tag", endTag = "end_tag",
        tagContentTag = "tag_content";
    const getToken = (codeArr, i) => {
        if (codeArr[i] === "<") {
            // cdata
            if (i + 1 < codeArr.length && codeArr[i + 1] === "!") {
                let next = getCData(codeArr, i);
                if (next === i) return [, , i];
                else return [cdataTag, , next];
            }
            // end_tag
            if (i + 1 < codeArr.length && codeArr[i + 1] === "/") {
                let next = getTagName(codeArr, i + 2);
                if (next === i + 2) return [, , i];
                else return [endTag, codeArr.slice(i + 2, next).join(""), next + 1];
            }
            // start_tag
            let next = getTagName(codeArr, i + 1);
            if (next === i + 1) return [, , i];
            else return [startTag, codeArr.slice(i + 1, next).join(""), next + 1];
        }
        // tag_content
        for (let j = i; j < codeArr.length; ++j) {
            if (codeArr[j] === "<") return [tagContentTag, , j];
        }
        return [, , i];
    };

    for (let i = 0; i < codeArr.length;) {
        let [tag, tagContent, next] = getToken(codeArr, i);
        i = next;
        if (tag === undefined) {
            return false;
        } else if (tag === cdataTag || tag === tagContentTag || tag === startTag) {
            stk.push({
                "tag": tag,
                "val": tagContent
            });
            if (tag === startTag && !isValidTagName(tagContent)) return false;
        } else if (tag === endTag) {
            if (!stk.length) return false;
            while (stk.length
            && (stk[stk.length - 1].tag === cdataTag || stk[stk.length - 1].tag === tagContentTag)) stk.pop();
            if (stk.length && stk[stk.length - 1].tag === startTag && stk[stk.length - 1].val === tagContent) stk.pop();
            else return false;
        }
        if (!stk.length && i < codeArr.length) return false;
    }
    return stk.length === 0;
};