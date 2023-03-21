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

// ACCEPTED in the first attemption )
