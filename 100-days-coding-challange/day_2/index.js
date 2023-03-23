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
