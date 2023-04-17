// LeetCode 2618. Check if Object Instance of Class

/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */

var checkIfInstanceOf = function (obj, classFunction) {
  if (obj == null || typeof obj == null || typeof classFunction !== "function")
    return false;
  return Object(obj) instanceof classFunction;
};

// LeetCode 2619. Array Prototype Last

Array.prototype.last = function () {
  let lengthOfArray = this.length;
  if (lengthOfArray === 0) return -1;
  return this[this.length - 1];
};

// LeetCode 2625. Flatten Deeply Nested Array

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */

var flat = function (arr, n) {
  let res = [];
  for (const element of arr) {
    if (Array.isArray(element) && n > 0) {
      res.push(...flat(element, n - 1));
    } else {
      res.push(element);
    }
  }
  return res;
};
