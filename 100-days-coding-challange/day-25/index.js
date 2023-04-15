// LeetCode 2620. Counter

/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function (n) {
  let count = n - 1;
  return function () {
    count++;
    return count;
  };
};

// LeetCode 2621. Sleep

/**
 * @param {number} millis
 */

async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
  return millis;
}
