// LeetCode 228. Summary Ranges

/**
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function (nums) {
  let index = 0,
    ranges = [];
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 < nums.length && nums[i] + 1 == nums[i + 1]) continue;
    else if (index == i) ranges.push(`${nums[index]}`);
    else ranges.push(`${nums[index]}->${nums[i]}`);
    index = i + 1;
  }
  return ranges;
};

// LeetCode 448. Find All Numbers Disappeared in an Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
  const uniqueValues = new Set(nums),
    result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!uniqueValues.has(i)) {
      result.push(i);
    }
  }

  return result;
};
