// LeetCode 500. Keyboard Row

/**
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function (words) {
  const result = [],
    row1 = new Set("qwertyuiop"),
    row2 = new Set("asdfghjkl"),
    row3 = new Set("zxcvbnm");

  for (let word of words) {
    const arr = Array.from(new Set(word.toLowerCase()));

    if (arr.every((char) => row1.has(char))) {
      result.push(word);
    }

    if (arr.every((char) => row2.has(char))) {
      result.push(word);
    }

    if (arr.every((char) => row3.has(char))) {
      result.push(word);
    }
  }

  return result;
};
