class Node {
    /** 
     * @param {number} val
     * @param {Node} prev
     * @param {Node} next
     * @return {void}
     */
    constructor(key = 0, val = 0, prev = null, next = null) {
      this.key = key;
      this.val = val;
      this.prev = prev;
      this.next = next;
    }
  }
  
  /**
   * @param {number} capacity
   */
  var LRUCache = function (capacity) {
    this.cap = capacity;
    this.first = new Node(Infinity, Infinity);
    this.last = new Node(-Infinity, -Infinity);
    this.first.next = this.last;
    this.last.prev = this.first;
    this.cache = new Map([
      [this.first.key, this.first],
      [this.last.key, this.last],
    ]);
  };
  
  /** 
   * @param {Node} node
   * @return {void}
   */
  LRUCache.prototype.insert = function (node) {
    node.prev = null;
    node.next = this.first;
    this.first.prev = node;
    this.first = node;
  };
  
  /** 
   * @param {Node} node
   * @return {void}
   */
  LRUCache.prototype.remove = function (node) {
    const { prev, next } = node;
    if (prev && next) {
      [prev.next, next.prev] = [next, prev];
    } else if (prev) {
      prev.next = null;
      this.last = prev;
    } else if (next) {
      next.prev = null;
      this.first = next;
    }
  };
  
  /** 
   * @param {number} key
   * @return {number}
   */
  LRUCache.prototype.get = function (key) {
    const node = this.cache.get(key);
    if (!node) {
      return -1;
    }
    this.remove(node);
    this.insert(node);
    return node.val;
  };
  
  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  LRUCache.prototype.put = function (key, value) {
    const node = new Node(key, value);
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key));
    }
    this.insert(node);
    this.cache.set(key, node);
    const n = this.cache.size - this.cap;
    for (i = 0; i < n; ++i) {
      this.cache.delete(this.last.key);
      this.remove(this.last);
    }
    return null;
  };
  