// Leetcode question 28 - Find the Index of the First Occurance in a String

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
};

// Leetcode question 58 - Length of Last Word

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  s = s.trim().split(" ");
  let lastWord = s[s.length - 1].length;
  return lastWord;
};

// Leetcode question 67. Add Binary

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  let len1 = a.length,
    len2 = b.length,
    max = Math.max(len1, len2),
    res = "",
    carry = 0,
    val = 0;

  for (var i = 0; i < max; i++) {
    val = Number(a[len1 - 1 - i] || 0) + Number(b[len2 - 1 - i] || 0) + carry;
    carry = Math.floor(val / 2);
    res = (val % 2) + res;
  }

  if (carry) res = 1 + res;

  return res;
}; // solved in 3 attempts

// ACCEPTED in the first attemption )
