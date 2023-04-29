// LeetCode 414. Third Maximum Number

/**
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function (nums) {
  nums.sort((a, b) => b - a);
  let counted = 1,
    prev = nums[0],
    len = nums.length;
  for (let i = 1; i < len; ++i) {
    if (nums[i] != prev) {
      counted += 1;
      prev = nums[i];
    }

    if (counted == 3) {
      return nums[i];
    }
  }
  return nums[0];
};

// LeetCode 1037. Valid Boomerang

/**
 * @param {number[][]} points
 * @return {boolean}
 */

var isBoomerang = function (points) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points;
  return (y1 - y2) * (x1 - x3) != (y1 - y3) * (x1 - x2);
};
