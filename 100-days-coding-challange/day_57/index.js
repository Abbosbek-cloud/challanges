// LeetCode 495. Teemo Attacking

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */

var findPoisonedDuration = function (timeSeries, duration) {
  let start = new Date();
  const length = timeSeries.length;
  let sum = 0;
  for (let index = 1; index < length; index++) {
    if (timeSeries[index] - timeSeries[index - 1] > duration) {
      sum += duration;
    } else {
      sum += timeSeries[index] - timeSeries[index - 1];
    }
  }
  sum += duration;
  let end = new Date();
  console.log("ends in", end - start);
  return sum;
};
