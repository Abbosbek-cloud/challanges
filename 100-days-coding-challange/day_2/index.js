// Leetcode solution 6 Zigzag Conversion

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
  let answer = "",
    n = s.length,
    sections = Math.ceil(n / (2 * numRows - 2.0)),
    numColumns = sections * (numRows - 1),
    matrix = new Array(numRows)
      .fill(0)
      .map(() => new Array(numColumns).fill(" ")),
    currRow = 0,
    currColumn = 0,
    currentStrIndx = 0;

  while (currentStrIndx < n) {
    while (currRow < numRows && currentStrIndx < n) {
      matrix[currRow][currColumn] = s[currentStrIndx];
      currRow++;
      currentStrIndx++;
    }
    currRow -= 2;
    currColumn++;
    while (currRow > 0 && currColumn < numColumns && currentStrIndx < n) {
      matrix[currRow][currColumn] = s[currentStrIndx];
      currRow--;
      currColumn++;
      currentStrIndx++;
    }
  }
  answer = matrix.map((row) => row.join("")).join("");
  return answer.replaceAll(" ", "");
};

// Leetcode 50. Pow(x,y)

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var myPow = function (x, n) {
  if (n === 0) return 1;

  let power = Math.abs(n);

  let res =
    power % 2 === 0
      ? myPow(x * x, power / 2)
      : myPow(x * x, (power - 1) / 2) * x;

  return n < 0 ? 1 / res : res;
};
