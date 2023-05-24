// LeetCode 1051. Height Checker

/**
 * @param {number[]} heights
 * @return {number}
 */

var heightChecker = function (heights) {
  let expected = [...heights].sort((a, b) => a - b),
    output = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      output++;
    }
  }
  return output;
};
