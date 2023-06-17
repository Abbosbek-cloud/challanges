// LeetCode 1408. String Matching in an Array

/**
 * @param {string[]} words
 * @return {string[]}
 */

var stringMatching = function (words) {
  const newArr = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].includes(words[i])) {
        newArr.push(words[i]);
        break;
      }
    }
  }
  return newArr;
};
