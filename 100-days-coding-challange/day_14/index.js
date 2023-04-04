// LeetCode 2405. Optimal partition of String

/**
 * @param {string} s
 * @return {number}
 */

var partitionString = function (s) {
  let map = new Map(),
    count = 1,
    len = s.length;
  for (let i = 0; i < len; i++) {
    if (map.has(s[i])) {
      count++;
      map = new Map();
    }
    map.set(s[i], 1);
  }
  return count;
};

console.log(partitionString("abababfjefeb"));
