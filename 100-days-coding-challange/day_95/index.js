// LeetCode 2108. Find First Palindromic String in the Array

/**
 * @param {string[]} words
 * @return {string}
 */

var firstPalindrome = function (words) {
  for (str of words) {
    let checkIfPalindrome = isPalindrome(str);
    if (checkIfPalindrome) return str;
  }

  return "";
};

function isPalindrome(str) {
  let lptr = 0;
  let rptr = str.length - 1;
  while (lptr <= rptr) {
    if (str[lptr] !== str[rptr]) {
      return false;
    }
    lptr++;
    rptr--;
  }
  return true;
}
