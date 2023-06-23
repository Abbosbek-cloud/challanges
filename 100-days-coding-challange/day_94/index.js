// LeetCode 1773. Count Items Matching a Rule

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;

  const map = {
    type: 0,
    color: 1,
    name: 2,
  };

  for (const item of items) {
    const index = map[ruleKey];
    if (item[index] === ruleValue) {
      count++;
    }
  }

  return count;
};
