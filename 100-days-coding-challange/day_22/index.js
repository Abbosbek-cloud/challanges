// LeetCode 2016. Maximum Difference Between Increasing Elements

/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumDifference = function (nums) {
  let maxArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      maxArr.push(nums[j] - nums[i]);
    }
  }
  let res = Math.max(...maxArr);

  if (res > 0) {
    return res;
  } else {
    return -1;
  }
};
