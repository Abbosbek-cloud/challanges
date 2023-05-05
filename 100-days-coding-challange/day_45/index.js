// LeetCode 674. Longest Continuous Increasing Subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */

var findLengthOfLCIS = function (nums) {
  let answer = 0,
    anch = 0,
    index = 0;
  while (index < nums.length) {
    if (index > 0 && nums[index - 1] >= nums[index]) {
      anch = index;
    }
    answer = Math.max(answer, index - anch + 1);
    index++;
  }
  return answer;
};
