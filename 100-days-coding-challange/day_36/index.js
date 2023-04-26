// LeetCode 977. Squares of a Sorted Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function (nums) {
  const results = new Array(nums.length);
  let left_idx = 0,
    right_idx = nums.length - 1,
    next_highest_square_index = nums.length - 1; // keep track where our next insert position will be in the results array

  while (left_idx <= right_idx) {
    const left_el = Math.pow(nums[left_idx], 2);
    const right_el = Math.pow(nums[right_idx], 2);
    if (left_el > right_el) {
      results[next_highest_square_index] = left_el;
      next_highest_square_index -= 1;
      left_idx += 1;
    } else {
      results[next_highest_square_index] = right_el;
      next_highest_square_index -= 1;
      right_idx -= 1;
    }
  }
  return results;
};
