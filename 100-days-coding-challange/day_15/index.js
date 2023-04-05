// LeetCode 12. Integer to Roman

/**
 * @param {number} num
 * @return {string}
 */

const intToRoman = function (num) {
  const str = num.toString();

  const romanNumerals = [
    ["", "M", "MM", "MMM"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ];

  let roman = "";

  for (let i = str.length - 1, j = romanNumerals.length - 1; i >= 0; i--, j--) {
    roman = romanNumerals[j][str[i]] + roman;
  }

  return roman;
};

// LeetCode 2439. Minimize Maximum of Array

/**
 * @param {number[]} nums
 * @return {number}
 */

var minimizeArrayValue = function (nums) {
  let answer = 0,
    prefixSum = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    answer = Math.max(answer, Math.ceil(prefixSum / (i + 1)));
  }
  return answer;
};
