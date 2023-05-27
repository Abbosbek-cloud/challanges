// LeetCode 705. Design HashSet

var MyHashSet = function () {
  this.map = {};
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (!this.map[key]) {
    this.map[key] = true;
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  if (this.map[key]) {
    delete this.map[key];
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  if (this.map[key]) {
    return true;
  } else {
    return false;
  }
};

// Class based solution

class HashSetClass {
  constructor() {
    this.map = {};
  }
  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    if (!this.map[key]) {
      this.map[key] = true;
    }
  }
  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    if (this.map[key]) {
      delete this.map[key];
    }
  }
  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    if (this.map[key]) {
      return true;
    } else {
      return false;
    }
  }
}
