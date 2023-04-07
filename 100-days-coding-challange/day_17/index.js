// LeetCode 1020. Number of Enclaves

/**
 * @param {number[][]} grid
 * @return {number}
 */

var numEnclaves = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const checkEnclaves = ({ row, col }) => {
    if (row < 0 || col < 0 || row >= m || col >= n) return;
    const value = grid[row][col];
    if (value !== 1) return;
    grid[row][col] = "x";
    checkEnclaves({ row, col: col + 1 });
    checkEnclaves({ row, col: col - 1 });
    checkEnclaves({ row: row + 1, col });
    checkEnclaves({ row: row - 1, col });
  };
  let result = 0;

  for (let row = 0; row < m; row++) {
    grid[row][0] === 1 && checkEnclaves({ row, col: 0 });
    grid[row][n - 1] === 1 && checkEnclaves({ row, col: n - 1 });
  }
  for (let col = 0; col < n; col++) {
    grid[0][col] === 1 && checkEnclaves({ row: 0, col });
    grid[m - 1][col] === 1 && checkEnclaves({ row: m - 1, col });
  }
  for (let row = 1; row < m - 1; row++) {
    for (let col = 1; col < n - 1; col++) {
      if (grid[row][col] === 1) result += 1;
    }
  }
  return result;
};

// LeetCode 1021. Remove Outermost Parentheses

/**
 * @param {string} s
 * @return {string}
 */

var removeOuterParentheses = function (s) {
  let open = 0,
    sb = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" && open++ > 0) sb += s[i];
    else if (s[i] == ")" && open-- > 1) sb += s[i];
  }
  return sb;
};
