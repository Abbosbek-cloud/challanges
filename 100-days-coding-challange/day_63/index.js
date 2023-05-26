// LeetCode 706. Design HashMap

var MyHashMap = function () {
  this.keys = [];
  this.values = [];
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */

MyHashMap.prototype.put = function (key, value) {
  // if key exists, replace it's value; else append;
  let i = this.keys.indexOf(key);

  if (i >= 0) {
    this.values[i] = value;
  } else {
    this.keys.push(key);
    this.values.push(value);
  }
};

/**
 * @param {number} key
 * @return {number}
 */

MyHashMap.prototype.get = function (key) {
  for (let i = 0; i < this.keys.length; i++) {
    if (this.keys[i] === key) return this.values[i];
  }
  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */

MyHashMap.prototype.remove = function (key) {
  let i = this.keys.indexOf(key);

  if (i >= 0) {
    this.keys.splice(i, 1);
    this.values.splice(i, 1);
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
