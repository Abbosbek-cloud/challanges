// LeetCode 1512. Number of Good Pairs

/**
 * @param {number[]} nums
 * @return {number}
 */

var numIdenticalPairs = function (nums) {
  const hashMap = new Map();
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!hashMap.has(nums[i])) {
      hashMap.set(nums[i], 1);
    } else {
      result += hashMap.get(nums[i]);
      hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
    }
  }

  return result;
};
