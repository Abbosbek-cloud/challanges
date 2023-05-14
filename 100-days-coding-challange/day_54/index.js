// LeetCode 4. Median of Two Sorted Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  const val = [...nums1, ...nums2].sort(function (a, b) {
    return a - b;
  });

  if (val.length % 2 !== 0) {
    const median = Math.floor(val.length / 2);

    return val[median].toFixed(4);
  } else if (val.length % 2 === 0) {
    const med1 = val[val.length / 2 - 1];
    const med2 = val[val.length / 2];

    const median = (med1 + med2) / 2;

    return median.toFixed(4);
  }
};
