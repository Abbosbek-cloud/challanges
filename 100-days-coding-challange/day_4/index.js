// LeetCode 88. Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  let counter = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (i >= m) {
      nums1.splice(i, 1, nums2[counter]);
      counter++;
    }
  }
  nums1.sort((first, second) => first - second);
  return nums1;
};

// LeetCode 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  let result = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return result.split("").reverse().join("") === result ? true : false;
};
