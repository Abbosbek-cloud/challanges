// LeetCode 594. Longest Harmonious Subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */

var findLHS = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0,
      isFlagged = false;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] == nums[i]) count++;
      else if (nums[j] + 1 == nums[i]) {
        count++;
        isFlagged = true;
      }
    }
    if (isFlagged) {
      res = Math.max(count, res);
    }
  }
  return res;
};

// LeetCode 599. Minimum Index Sum of Two Lists

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

var findRestaurant = function (list1, list2) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }
  let min = Infinity;
  for (let i = 0; i < list2.length; i++) {
    if (map.has(list2[i])) {
      if (map.get(list2[i]) + i < min) {
        result = [list2[i]];
        min = map.get(list2[i]) + i;
      } else if (map.get(list2[i]) + i === min) {
        result.push(list2[i]);
      }
    }
  }
  return result;
};

// LeetCode 697. Degree of an Array

/**
 * @param {number[]} nums
 * @return {number}
 */

var findShortestSubArray = function (nums) {
  const counts = {},
    firstIndexes = {},
    lastIndexes = {};
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    const k = nums[i];
    counts[k] = (counts[k] || 0) + 1;
    max = Math.max(max, counts[k]);
    if (firstIndexes[k] === undefined) {
      firstIndexes[k] = i;
    }
    lastIndexes[k] = i;
  }
  let res = nums.length;
  for (const k in counts) {
    if (counts[k] === max) {
      res = Math.min(res, lastIndexes[k] - firstIndexes[k] + 1);
    }
  }
  return res;
};
