// LeetCode 2574. Left and Right Sum Differencies

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var leftRigthDifference = function (nums) {
  const sum = nums.reduce((acc, curr) => acc + curr, 0);

  const res = [];
  let leftSum = 0;
  for (const num of nums) {
    res.push(Math.abs(sum - num - 2 * leftSum));
    leftSum += num;
  }

  return res;
};
