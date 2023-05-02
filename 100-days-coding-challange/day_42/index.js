// LeetCode 349. Intersection of Two Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function (nums1, nums2) {
  let result = [],
    index = 0,
    len = nums1.length;
  while (index < len) {
    if (nums2.includes(nums1[index])) {
      if (!result.includes(nums1[index])) {
        result.push(nums1[index]);
      }
    }
    index++;
  }
  return result;
};
