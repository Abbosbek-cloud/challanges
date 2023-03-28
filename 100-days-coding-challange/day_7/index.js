// LeetCode 748. Shortest Completing Word

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */

var shortestCompletingWord = function (licensePlate, words) {
  words.sort((a, b) => a.length - b.length);
  const shortText = licensePlate.replaceAll(/[^A-Za-z]/g, "").toLowerCase();
  const findRest = (word) => {
    [...shortText].forEach((s) => (word = word.replace(s, "")));
    return word.length;
  };
  return words.find(
    (word) =>
      word.length >= shortText.length &&
      word.length - shortText.length === findRest(word)
  );
};

// LeetCode 821. Shortest Distance to a Character

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */

var shortestToChar = function (s, c) {
  let indexOfC = s.indexOf(c);
  let nextIndexOfC = Infinity;
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (i == indexOfC) {
      result.push(0);
      nextIndexOfC = indexOfC;
      indexOfC = s.indexOf(c, indexOfC + 1);
    } else {
      let out = Math.min(Math.abs(indexOfC - i), Math.abs(nextIndexOfC - i));
      result.push(out);
    }
  }
  return result;
};
