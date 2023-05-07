// LeetCode 2624. Snail Traversal

/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */

Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) {
    return [];
  }

  const result = [];

  let clockwise = true;
  let temp = [];

  this.forEach((item) => {
    if (temp.length < rowsCount) {
      temp.push(item);
    }
    if (temp.length === rowsCount) {
      if (clockwise) {
        clockwise = false;
      } else {
        temp.reverse();
        clockwise = true;
      }
      result.push([...temp]);
      temp = [];
    }
  });

  let transpose = [];
  for (let j = 0; j < result[0].length; j++) {
    let t = [];
    for (let i = 0; i < result.length; i++) {
      t.push(result[i][j]);
    }
    transpose.push([...t]);
  }

  return transpose;
};
