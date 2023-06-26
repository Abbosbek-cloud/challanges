// LeetCode 2451. Odd String Difference

/**
 * @param {string[]} words
 * @return {string}
 */

var oddString = function (words) {
  var res = [];
  for (var i = 0; i < words.length; i++) {
    var tempRes = [];
    for (var j = 1; j < words[i].length; j++) {
      tempRes.push(words[i].charCodeAt(j - 1) - words[i].charCodeAt(j));
    }
    res.push(tempRes);
  }

  for (var i = 0; i < res.length; i++) {
    if (res.filter((x) => x.toString() == res[i].toString()).length == 1) {
      return words[i];
    }
  }
};
