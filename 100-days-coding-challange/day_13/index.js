// LeetCode 881. Boats to Save People

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */

var numRescueBoats = function (people, limit) {
  people = people.sort((a, b) => a - b);
  let lightPeople = 0,
    heaviestPeople = people.length - 1,
    result = 0;

  while (lightPeople <= heaviestPeople) {
    result += 1;
    if (people[lightPeople] + people[heaviestPeople] <= limit) {
      lightPeople += 1;
    }
    heaviestPeople -= 1;
  }

  return result;
};
