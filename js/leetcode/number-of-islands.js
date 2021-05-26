/**
 * 方法二：并查集
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let m = grid.length, n = grid[0].length;
    let ufs = new UnionFindSet(m * n);
    let countZero = 0;

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            if (grid[i][j] === "1") {
                let cur = i * n + j;
                if (j + 1 < n && grid[i][j + 1] === "1") {
                    ufs.union(cur, cur + 1);
                }
                if (i + 1 < m && grid[i + 1][j] === "1") {
                    ufs.union(cur, cur + n);
                }
            } else if (grid[i][j] === "0") {
                countZero++;
            }
        }
    }

    return ufs.getCount() - countZero;
};


/**
 * 并查集模板s
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