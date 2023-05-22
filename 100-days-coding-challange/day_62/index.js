// LeetCode 643. Maximum Average Subarray I

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function (nums, k) {
  let maxsum = 0,
    avg = 0;
  const cal = 0.00001;
  for (let i = 0; i < k; i++) {
    maxsum += nums[i];
  }
  if (nums.length === k) {
    avg = maxsum / k;
    return avg.toFixed(5);
  }
  let cursum = maxsum;
  for (let i = k; i < nums.length; i++) {
    cursum = cursum - nums[i - k] + nums[i];
    maxsum = Math.max(cursum, maxsum);
  }
  avg = maxsum / k;
  return avg.toFixed(5);
};
