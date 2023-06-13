// LeetCode 2085. Count Common Words With One Occurrence

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */

var countWords = function (words1, words2) {
  let map1 = new Map(); // for words1
  let map2 = new Map(); // for words2
  // fill map1
  for (let i = 0; i < words1.length; i++) {
    if (map1.has(words1[i])) {
      map1.set(words1[i], map1.get(words1[i]) + 1);
    } else {
      map1.set(words1[i], 1);
    }
  }
  // fill map2
  for (let i = 0; i < words2.length; i++) {
    if (map2.has(words2[i])) {
      map2.set(words2[i], map2.get(words2[i]) + 1);
    } else {
      map2.set(words2[i], 1);
    }
  }
  let counter = 0;
  // find elements which faced ones in each map
  for (let i = 0; i < words2.length; i++) {
    if (map1.get(words2[i]) === 1 && map2.get(words2[i]) === 1) counter++;
  }
  return counter;
};
