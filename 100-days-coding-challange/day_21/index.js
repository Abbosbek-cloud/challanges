// LeetCode 2148. Count Elements with Strictly smaller and greater elements

/**
 * @param {number[]} nums
 * @return {number}
 */

var countElements = function (nums) {
  const min = Math.min(...nums),
    max = Math.max(...nums);
  let result = nums.reduce((acc, num) => {
    if (num > min && num < max) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return result;
};

// LeetCode 2154. Keep Multiplying Found Values by Two

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */

var findFinalValue = function (nums, original) {
  let set = new Set(nums);
  for (let i = 0; i <= nums.length; i++) {
    if (set.has(original)) {
      original = original * 2;
    } else {
      return original;
    }
  }
};
