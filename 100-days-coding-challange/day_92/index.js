// LeetCode 2418. Sort the People

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

var sortPeople = function (names, heights) {
  let track = names.map((name, ind) => ({
    name: names[ind],
    age: heights[ind],
  }));

  track.sort((a, b) => b.age - a.age);

  return track.map((person) => person.name);
};
