// LeetCode 896. Monotonic Array

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var isMonotonic = function (nums) {
  let track;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      if (track === -1) return false;
      track = 1;
    } else if (nums[i] < nums[i - 1]) {
      if (track === 1) return false;
      track = -1;
    }
  }
  return true;
};
