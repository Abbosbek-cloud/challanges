// LeetCode 1470. Shuffle the Array

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

var shuffle = function (nums, n) {
  let res = Array(2 * n);

  for (let i = 0; i < n; ++i) {
    res[2 * i] = nums[i];
    res[2 * i + 1] = nums[n + i];
  }

  return res;
};

// LeetCode 2176. Count Equal and Divisible Pairs in an Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var countPairs = function (nums, k) {
  let quantity = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      nums[i] == nums[j] && (i * j) % k === 0 ? quantity++ : null;
    }
  }
  return quantity;
};
