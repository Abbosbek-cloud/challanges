// LeetCode 1528. Shuffle String

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

var restoreString = function (s, indices) {
  const b = [];
  for (let i = 0; i < indices.length; i++) {
    b[indices[i]] = s[i];
  }
  return b.join("");
};
