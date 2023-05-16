// LeetCode 121. Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let max_profit = 0,
    k = 0,
    i = 0;
  while (i < prices.length) {
    if (prices[i] > prices[k]) {
      let profit = prices[i] - prices[k];
      max_profit = Math.max(max_profit, profit);
    } else {
      k = i;
    }
    i++;
  }
  return max_profit;
};

// LeetCode 575. Distribute Candies

/**
 * @param {number[]} candyType
 * @return {number}
 */

var distributeCandies = function (candyType) {
  return Math.min(candyType.length / 2, new Set(candyType).size);
};
