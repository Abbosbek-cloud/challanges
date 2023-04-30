// LeetCode 506. Relative Ranks

/**
 * @param {number[]} score
 * @return {string[]}
 */

var findRelativeRanks = function (score) {
  let newScore = [...score].sort((a, b) => b - a),
    mapRes = new Map(),
    len = score.length,
    scoreIndex = 0;
  for (let i = 0; i < newScore.length; i++) {
    mapRes.set(newScore[i], i);
  }
  while (scoreIndex < len) {
    score[scoreIndex] = "" + (mapRes.get(score[scoreIndex]) + 1);
    if (score[scoreIndex] === "1") score[scoreIndex] = "Gold Medal";
    if (score[scoreIndex] === "2") score[scoreIndex] = "Silver Medal";
    if (score[scoreIndex] === "3") score[scoreIndex] = "Bronze Medal";
    scoreIndex++;
  }
  return score;
};
