// LeetCode 1089. Duplicate Zeros

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

var duplicateZeros = function (arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0 && i != n - 1) {
      for (let j = n - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
      arr[i + 1] = 0;
      i++;
    }
  }
  return arr;
};
