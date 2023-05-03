// LeetCode 485. Max Consecutive Ones

/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function (nums) {
  let max = 0,
    current = 0,
    index = 0,
    len = nums.length;

  while (index < len) {
    current = nums[index] === 0 ? 0 : current + 1;
    max = current > max ? current : max;
    index++;
  }

  return max;
};
