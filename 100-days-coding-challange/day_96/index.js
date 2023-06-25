// LeetCode 2114. Maximum Number of Words Found in Sentences

/**
 * @param {string[]} sentences
 * @return {number}
 */

var mostWordsFound = function (sentences) {
  let maxWords = 0,
    count = 0;
  for (let i = 0; i < sentences.length; i++) {
    let str = sentences[i].trim();
    for (let j = 0; j < str.length; j++) {
      if (str[j] === " ") count++;
    }
    if (count + 1 > maxWords) maxWords = count + 1;
    count = 0;
  }
  return maxWords;
};

// LeetCode 2678. Number of Senior Citizens

/**
 * @param {string[]} details
 * @return {number}
 */

var countSeniors = function (details) {
  return details.filter((psg) => +psg.slice(11, 13) > 60).length;
};
