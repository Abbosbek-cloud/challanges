// LeetCode 1002. Find Common Characters

/**
 * @param {string[]} words
 * @return {string[]}
 */

var commonChars = function (words) {
  let res = [];
  let hash = hashWord(words[0]);

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    let tempHash = hashWord(word);
    merge(hash, tempHash);
  }

  for (let [letter, count] of Object.entries(hash)) {
    while (0 < count--) {
      res.push(letter);
    }
  }

  return res;
};

function hashWord(word) {
  let hash = {};
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (hash[letter]) {
      hash[letter]++;
    } else {
      hash[letter] = 1;
    }
  }
  return hash;
}

function merge(hash1, hash2) {
  for (let letter of Object.keys(hash1)) {
    if (!hash2[letter]) {
      delete hash1[letter];
    } else {
      hash1[letter] = Math.min(hash1[letter], hash2[letter]);
    }
  }
}
