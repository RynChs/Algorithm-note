/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const { map } = this;
    if (map.has(key)) {
        const value = map.get(key);
        map.delete(key);
        map.set(key, value);
        return value;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const { map, capacity } = this;
    if (map.has(key)) {
        map.delete(key);
    }
    if (map.size === capacity) {
        map.delete(this.map.keys().next().value);
    }
    map.set(key, value);
};

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
const param_1 = cache.get(1); // 返回  1
console.log(param_1);
cache.put(3, 3);    // 该操作会使得密钥 2 作废
const param_2 = cache.get(2); // 返回 -1 (未找到)
console.log(param_2);
cache.put(4, 4);    // 该操作会使得密钥 1 作废
const param_3 = cache.get(1); // 返回 -1 (未找到)
console.log(param_3);
const param_4 = cache.get(3); // 返回  3
console.log(param_4);
const param_5 = cache.get(4); // 返回  4
console.log(param_5);