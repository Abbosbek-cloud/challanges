// LeetCode 5. Longest Palindromic Substring

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  if (s.length === 1) return s;

  let longest = "";

  for (let i = 0; i < s.length - 1; i++) {
    let odd = palindrome(s, i, i);
    let even = palindrome(s, i, i + 1);

    longest = longest.length < odd.length ? odd : longest;
    longest = longest.length < even.length ? even : longest;
  }

  return longest;
};

function palindrome(s, l, r) {
  while (l >= 0 && r < s.length && s[l] == s[r]) {
    l--;
    r++;
  }

  return s.slice(l + 1, r);
}
