// LeetCode 2744. Find Maximum Number of String Pairs

/**
 * @param {string[]} words
 * @return {number}
 */

var maximumNumberOfStringPairs = function (words) {
  let n = words.length,
    cc = 0,
    visitedIndexSet = new Set();
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) {
      let w1 = words[i],
        w2 = words[j];

      if (
        !visitedIndexSet.has(i) &&
        !visitedIndexSet.has(j) &&
        w1[0] === w2[1] &&
        w1[1] === w2[0]
      ) {
        visitedIndexSet.add(i);
        visitedIndexSet.add(j);
        cc++;
        break;
      }
    }

  return cc;
};
