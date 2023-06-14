// LeetCode 1844. Replace All Digits with Characters

/**
 * @param {string} s
 * @return {string}
 */

var replaceDigits = function (s) {
  let output = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      const charCode = s.charCodeAt(i - 1);
      output += String.fromCharCode(charCode + +s[i]);
    } else {
      output += s[i];
    }
  }
  return output;
};
