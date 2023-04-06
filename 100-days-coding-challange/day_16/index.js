// LeetCode 389. Find Difference

/**
 * @param { string } s
 * @param { string } t
 * @returns { string }
 */

var findTheDifference = function (s, t) {
  var first = Array.from(s).sort();
  var second = Array.from(t).sort();

  let i = 0;
  let j = 0;
  while (i < first.length && j < second.length) {
    if (first[i] == second[i]) {
      i++;
      j++;
    } else {
      return second[j];
    }
  }
  return second[second.length - 1];
};

// LeetCode 1254. Number of Closed Islands

/**
 * @param {number[][]} grid
 * @return {number}
 */

var closedIsland = function (grid) {
  let rows = grid[0].length,
    columns = grid.length,
    visited = [],
    result = 0,
    directories = [
      [0, 1],
      [-1, 0],
      [0, -1],
      [1, 0],
    ];
  for (let row of grid) visited.push(new Array(row.length).fill(0));
  const checkField = (x, y) => x >= 0 && y >= 0 && x < columns && y < rows;
  function dfs(x, y) {
    if (!checkField(x, y)) return false;
    if (visited[x][y] || grid[x][y] === 1) return true;
    visited[x][y] = 1;
    let result = true;
    for (const directory of directories) {
      result = dfs(x + directory[0], y + directory[1]) && result;
    }
    return result;
  }

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (!visited[i][j] && grid[i][j] === 0 && dfs(i, j)) result++;
    }
  }
  return result;
};
