// LeetCode 2395. Find Subarrays With Equal Sum

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var findSubarrays = function (nums) {
  let sum = {},
    l = nums.length;
  for (let i = 0; i < l; i++) {
    let s = nums[i] + nums[i + 1];
    if (sum[s]) {
      return true;
    } else {
      sum[s] = 1;
    }
  }
  return false;
};
