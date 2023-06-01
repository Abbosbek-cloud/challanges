// LeetCode 747. Largest Number At Least Twice of Others

/**
 * @param {number[]} nums
 * @return {number}
 */

var dominantIndex = function (nums) {
  const copy = [...nums],
    largest = Math.max(...nums);
  nums.splice(nums.indexOf(largest), 1);
  return nums.every((num) => num <= largest / 2) ? copy.indexOf(largest) : -1;
};
