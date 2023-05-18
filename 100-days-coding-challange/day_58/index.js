// LeetCode 598. Range Addition II

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */

var maxCount = function (m, n, ops) {
  if (ops.length === 0) return m * n;
  let min = [m, n];
  for (let [x, y] of ops) {
    min = [Math.min(x, min[0]), Math.min(y, min[1])];
  }
  return min[0] * min[1];
};
