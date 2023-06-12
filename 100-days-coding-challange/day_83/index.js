// LeetCode 1160. Find Words That Can Be Formed by Characters

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

var countCharacters = function (words, chars) {
  const result = [];
  let count = 0;
  for (let word of words) {
    const map = new Map();
    for (let char of chars) map.set(char, map.get(char) + 1 || 1);
    for (let i = 0; i < word.length; i++) {
      if (!map.get(word[i])) break;
      map.set(word[i], map.get(word[i]) - 1);
      if (i === word.length - 1) result.push(word);
    }
  }
  for (let word of result) count += word.length;

  return count;
};
