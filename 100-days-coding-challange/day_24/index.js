// LeetCode 2006. Count Number of Pairs With Absolute Difference K

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const countKDifference = (nums, k) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] + k == nums[j] || nums[i] - k == nums[j]) {
        count++;
      }
    }
  }
  return count;
};

// LeetCode 2057. Smallest Index With Equal Value

/**
 * @param {number[]} nums
 * @return {number}
 */

var smallestEqual = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 == nums[i]) return i;
  }
  return -1;
};
