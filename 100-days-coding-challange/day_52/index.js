// LeetCode 561. Array Partition

/**
 * @param {number[]} nums
 * @return {number}
 */

var arrayPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < nums.length; i += 2) {
    max += nums[i];
  }
  return max;
};
