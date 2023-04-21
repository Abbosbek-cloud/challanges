// LeetCode 169. Majority element

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  let majorCount = nums.length / 2;
  for (let num of nums) {
    let count = 0;
    for (let el of nums) {
      if (el === num) {
        count += 1;
      }
    }
    if (count > majorCount) return num;
  }

  return -1;
};
