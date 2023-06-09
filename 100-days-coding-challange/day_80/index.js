// LeetCode 744. Find Smallest Letter Greater Than Target

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

var nextGreatestLetter = function (letters, target) {
  const firstLetter = letters[0];
  const charCode = target.charCodeAt(0);

  letters.sort();

  for (let i = 0; i < letters.length; i++) {
    const code = letters[i].charCodeAt(0);

    if (code > charCode) {
      return letters[i];
    }
  }

  return firstLetter;
};
