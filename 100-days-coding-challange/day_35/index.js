// LeetCode 463. Island Perimeter

/**
 * @param {number[][]} grid
 * @return {number}
 */

var islandPerimeter = function (grid) {
  let queue = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        queue.push([row, col]);
      }
    }
  }

  let perimeter = 0;
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  while (queue.length > 0) {
    let [curRow, curCol] = queue.shift();

    for (let [dr, dc] of directions) {
      let nRow = curRow + dr;
      let nCol = curCol + dc;
      let rowInbounds = 0 <= nRow && nRow < grid.length;
      let colInbounds = 0 <= nCol && nCol < grid[0].length;

      if (!rowInbounds || !colInbounds || grid[nRow][nCol] === 0) {
        perimeter++;
        continue;
      }
    }
  }
  return perimeter;
};
