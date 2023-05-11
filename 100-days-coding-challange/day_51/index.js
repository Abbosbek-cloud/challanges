// LeetCode 455. Assign Cookies

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var findContentChildren = function (g, s) {
  const sortedg = [...g].sort((a, b) => {
    return a > b ? 1 : -1;
  });

  const sorteds = [...s].sort((a, b) => {
    return a > b ? 1 : -1;
  });

  let res = 0,
    countg = sortedg.length - 1,
    counts = sorteds.length - 1;

  while (countg >= 0 && counts >= 0) {
    const curG = sortedg[countg];
    const curS = sorteds[counts];

    if (curG > curS) {
      countg--;
      continue;
    }

    res += 1;

    countg--;
    counts--;
  }

  return res;
};
