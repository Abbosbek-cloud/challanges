// LeetCode 2622. Cache With Time Limit

class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }
  /**
   * @param {number} key
   * @param {number} value
   * @param {number} time until expiration in ms
   * @return {boolean} if un-expired key already existed
   */
  set(key, value, duration) {
    const currentTime = Date.now();
    const expireTime = currentTime + duration;
    if (this.cache.has(key) && this.cache.get(key).expireTime > currentTime) {
      this.cache.set(key, { value, expireTime });
      return true;
    } else {
      this.cache.set(key, { value, expireTime });
      return false;
    }
  }
  /**
   * @param {number} key
   * @return {number} value associated with key
   */
  get(key) {
    const currentTime = Date.now();
    if (this.cache.has(key) && this.cache.get(key).expireTime > currentTime) {
      return this.cache.get(key).value;
    } else {
      return -1;
    }
  }
  /**
   * @return {number} count of non-expired keys
   */
  count() {
    const currentTime = Date.now();
    let count = 0;
    for (const [key, value] of this.cache.entries()) {
      if (value.expireTime > currentTime) {
        count++;
      } else {
        this.cache.delete(key);
      }
    }
    return count;
  }
}

// LeetCode 2623. Memoize

/**
 * @param {Function} fn
 */

function memoize(fn) {
  let mp = new Map();
  return function newfn(...params) {
    if (mp.has(JSON.stringify(params))) {
      return mp.get(JSON.stringify(params));
    }
    let res = fn(params[0], params[1]);
    mp.set(JSON.stringify(params), res);
    return res;
  };
}
