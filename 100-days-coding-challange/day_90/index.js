// LeetCode 2506. Count Pairs Of Similar Strings

/**
 * @param {string[]} words
 * @return {number}
 */

var similarPairs = function (words) {
  const map = new Map();
  let res = 0;

  for (let word of words) {
    const element = [...new Set(word)].sort().join("");
    map.has(element)
      ? map.set(element, map.get(element) + 1)
      : map.set(element, 1);
  }

  map.forEach((value) => {
    if (value > 1) res += (value * (value - 1)) / 2;
  });

  return res;
};
