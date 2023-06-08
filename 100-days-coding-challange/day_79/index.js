// LeetCode 724. Find Pivot Index

/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function (nums) {
  const total = nums.reduce((acc, cur) => cur + acc, 0);
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentVal = nums[i];

    const right = total - left - currentVal;

    if (right === left) return i;
    left += nums[i];
  }

  return -1;
};
