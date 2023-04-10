// LeetCode 2529. Maximum Count of Positive Integer and Negative Integer

/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumCount = function (nums) {
  let pos = [],
    neg = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      continue;
    } else if (nums[i] < 0) {
      neg.push(nums[i]);
    } else if (nums[i] > 0) {
      pos.push(nums[i]);
    }
  }
  return Math.max(pos.length, neg.length);
};

// LeetCode 2535. Difference Between Element Sum and Digit Sum of an Array

/**
 * @param {number[]} nums
 * @return {number}
 */

var differenceOfSum = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  let digitSum = nums
    .join("")
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);
  let response = Math.abs(sum - digitSum);
  console.log(nums.join("").split(""));
  return response;
};

console.log(differenceOfSum([1, 15, 6, 3]));
