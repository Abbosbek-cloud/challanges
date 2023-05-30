// LeetCode 806. Number of Lines To Write String

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */

var numberOfLines = function (widths, s) {
  let linecount = 1,
    linewidth = 0;

  let l = s.length;
  for (let i = 0; i < l; ++i) {
    let c = s.charCodeAt(i) - 97;
    let w = widths[c];
    if (linewidth + w <= 100) {
      linewidth = linewidth + w;
    } else {
      linewidth = w;
      linecount = linecount + 1;
    }
  }

  return [linecount, linewidth];
};
