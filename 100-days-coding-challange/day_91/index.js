// LeetCode 2255. Count Prefixes of a Given String

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */

var countPrefixes = function (words, s) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === s[0]) count++;
    else if (
      words[i].length > 1 &&
      s.substring(0, words[i].length) === words[i]
    )
      count++;
  }
  return count;
};
