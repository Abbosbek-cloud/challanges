// LeetCode 229. Majority Element II

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var majorityElement = function (nums) {
  let n = nums.length;
  let third = Math.trunc(n / 3);

  let ans = [];
  let o = {};
  for (let i = 0; i < n; i++) {
    if (o[nums[i]] === undefined) {
      o[nums[i]] = 1;
    } else {
      o[nums[i]]++;
    }
    if (o[nums[i]] > third) {
      ans.push(nums[i]);
    }
  }
  return [...new Set(ans)];
};
