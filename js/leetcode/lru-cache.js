/**
 * 方法一： JS map 迭代顺序
 * 方法二： 双向链表 + 哈希表
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cap = capacity;
    this.valMap = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let res = this.valMap.get(key);
    if(res === undefined) return -1;
    this.valMap.delete(key);
    this.valMap.set(key, res);
    return res;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.valMap.delete(key);
    this.valMap.set(key, value);
    if(this.valMap.size > this.cap) {
        this.valMap.delete(this.valMap.entries().next().value[0]);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */