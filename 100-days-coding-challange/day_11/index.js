// LeetCode 2300. Successful pairs of spells and potions

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */

var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  const result = [],
    lenPotions = potions.length,
    maxPotion = potions[lenPotions - 1];

  for (const spell of spells) {
    const minPotion = Math.ceil(success / spell);
    if (minPotion > maxPotion) {
      result.push(0);
      continue;
    }
    const index = getLowerPotion(potions, minPotion);
    result.push(lenPotions - index);
  }
  return result;
};

function getLowerPotion(potions, minPotion) {
  let lowPotion = 0,
    highPotion = potions.length;
  while (lowPotion < highPotion) {
    const mid = Math.floor((lowPotion + highPotion) / 2);
    if (potions[mid] < minPotion) {
      lowPotion = mid + 1;
    } else {
      highPotion = mid;
    }
  }
  return lowPotion;
}
