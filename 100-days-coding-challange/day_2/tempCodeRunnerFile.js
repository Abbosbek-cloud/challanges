// Leetcode solution 6 Zigzag Conversion

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
  if (s.length == 1) return s;
  let arrOfWords = [],
    index = 0;
  while (index < numRows) {
    arrOfWords[index] = [];
    for (let i = 0; i <= s.length; i + numRows) {
      arrOfWords[index][i] = s[i];
    }
    index++;
  }
  return arrOfWords;
};

let word = convert("PAYPALISHIRING", 4);
console.log(word);
// ['p', '', '', 'i', '', '', 'n']
// ['a', '', 'l', 's', '', 'i', 'g']
// ['y', 'a', '', 'h', 'r', '', '']
// ['p', '', '', 'i', '', '', '']

let next = convert("PAYPALISHIRING", 3);
console.log(next);
// ['p', '', 'a', 'i', '', '', 'n']
// ['a', 'p', 'l', 's', '', 'i', 'g']
// ['y', '', 'i', 'h', 'r', '', '']
