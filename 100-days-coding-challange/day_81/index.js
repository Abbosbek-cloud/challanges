// LeetCode 38. Count and Say

/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function (n) {
  let str = "1",
    i = 1;
  while (i < n) {
    let strArray = str.split(""),
      count = 1;
    str = "";
    for (let j = 0; j < strArray.length; j++) {
      if (strArray[j] !== strArray[j + 1]) {
        str += count + strArray[j];
        count = 1;
      } else {
        count++;
      }
    }
    i++;
  }
  return str;
};
