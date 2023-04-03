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

  console.log(heaviestPeople, "ogir");

  while (lightPeople <= heaviestPeople) {
    result += 1;
    console.log(result, "res");
    if (people[lightPeople] + people[heaviestPeople] <= limit) {
      lightPeople += 1;
    }
    heaviestPeople -= 1;
  }

  return result;
};

console.log(numRescueBoats([3, 2, 2, 1], 3));

// Algorithm
//
