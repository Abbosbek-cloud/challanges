// LeetCode 1984. Minimum Difference Between Highest and Lowest of K Scores

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  let minDifference = Number.MAX_VALUE;

  while (left <= nums.length - k) {
    while (right - left + 1 < k) {
      right++;
    }
    minDifference = Math.min(minDifference, nums[right] - nums[left]);

    left++;
  }

  return minDifference === Number.MAX_VALUE ? 0 : minDifference;
};
