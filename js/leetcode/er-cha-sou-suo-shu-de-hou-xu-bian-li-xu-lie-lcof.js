/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    /**
     * postOrder[l:r]是否为二叉搜索树的后续遍历
     */
    const verifyHelper = (postorder, l, r) => {
        if(l >= r) return true;
        let cur = postorder[r], i = l;
        while(postorder[i] < cur) ++i;
        // Right subtree
        for(let j = i; j < r; ++j) {
            if(postorder[j] < cur) return false;
        }
        return verifyHelper(postorder, l, i-1) && verifyHelper(postorder, i, r-1);
    };

    return verifyHelper(postorder, 0, postorder.length-1);
};