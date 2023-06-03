// LeetCode 839. Similar String Groups

/**
 * @param {string[]} strs
 * @return {number}
 */

var numSimilarGroups = function (strs) {
  let parent = [],
    indx = 0;
  while (indx < strs.length) {
    parent[indx] = indx;
    indx++;
  }

  function union(x, y) {
    parent[find(x)] = find(y);
  }

  function find(x) {
    if (parent[x] != x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function isSimilar(x, y) {
    let diff = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== y[i]) {
        diff++;
        if (diff > 2) {
          return false;
        }
      }
    }
    return true;
  }

  // Compare each string with all other strings
  for (let i = 0; i < strs.length; i++) {
    for (let j = i + 1; j < strs.length; j++) {
      if (isSimilar(strs[i], strs[j])) {
        // If they are similar, union them in the structure
        union(i, j);
      }
    }
  }

  // Count the number of different roots in the structure
  let groups = 0;
  for (let i = 0; i < strs.length; i++) {
    if (parent[i] === i) {
      groups++;
    }
  }

  return groups;
};
