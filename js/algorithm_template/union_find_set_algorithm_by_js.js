// 并查集

/**
 * 并查集
 * 3道题；
 * Number of Islands I, II(lc-200, 305),
 * Surrounded Regions(lc-130)
 */

/**
 * 并查集（Union-find set）
 * 支持 3 种操作：查询，合并，添加
 * - 查询：查询某个元素属于哪个集合；查询的优化：路径压缩（在查询时，将被查询的节点到根节点的路径上的所有节点的父节点设置为根节点，
 * 从而减小树的高度）；递归查询改迭代查询；
 * - 合并：将两个集合合并为一个；合并的优化：按秩合并（在合并时，比较两棵树的大小，较大的一棵树的根节点称为合并后的书的根节点，较小的一
 * 棵树的根节点则成为前者的子节点，从而控制树的深度）
 * - 添加：添加一个新集合
 * 连通的 3 个性质：
 * - 自反性：节点 x 和节点 x 是连通的
 * - 对称性：节点 x 和节点 y 连通， 则节点 y 和节点 x 连通
 * - 传递性：如果节点 x 和 y 连通，y 和 z 连通，那么 x 和 z 也连通。
 */

/**
 * 并查集模板
 */
class UnionFindSet {
    /**
     * 初始化
     * @param {number} n
     */
    constructor(n) {
        // 连通量个数
        this.count = n;
        // 森林
        this.parent = new Array(n).fill(0).map(
            (ele, idx) => idx
        );
        // 树的秩
        this.rank = new Array(n).fill(0);
    }

    /**
     * 查询（路径压缩）；查询元素 x 的根节点
     * @param x
     * @returns {*}
     */
    find(x) {
        if (this.parent[x] === x) {
            return x;
        }
        // this.parent[x] != x
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    /**
     * 迭代查询
     * @param x
     * @returns {*}
     */
    iterativeFind(x) {

    }

    /**
     * 合并（按秩合并）：把元素 x 所在的集合与元素 y 所在的集合合并为一个
     * @param x
     * @param y
     */
    union(x, y) {
        let rootX = this.find(x), rootY = this.find(y);
        if (rootX === rootY) return;
        // rootX != rootY
        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else {
            // this.rank[rootX] === this.rank[rootY]
            this.parent[rootX] = rootY;
            this.rank[rootY]++;
        }
        this.count--;
    }

    /**
     * 添加：添加一个元素 x，这个元素单独属于一个仅有它自己的集合
     * @param x
     */
    makeSet(x) {
    }

    /**
     * 判断元素 x 和元素 y 是否连通
     * @param x
     * @param y
     * @returns {boolean}
     */
    connected(x, y) {
        let rootX = this.find(x), rootY = this.find(y);
        return rootX === rootY;
    }

    /**
     * 连通分量个数
     * @returns {number}
     */
    getCount() {
        return this.count;
    }
}

