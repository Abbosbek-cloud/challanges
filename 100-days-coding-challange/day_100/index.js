// LeetCode 2586. Count the Number of Vowel Strings in Range

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

var vowelStrings = function (words, left, right) {
  let count = 0;
  const vowels = "aeiou";

  for (let i = left; i <= right; i++) {
    const str = words[i];
    const firstChar = str.at(0);
    const lastChar = str.at(-1);

    if (vowels.includes(firstChar) && vowels.includes(lastChar)) count++;
  }

  return count;
};
