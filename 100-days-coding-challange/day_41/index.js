// LeetCode 219. Contains Duplicate II

var containsNearbyDuplicate = function (nums, k) {
  const hashmap = new Map();
  let index = 0,
    len = nums.length;

  while (index < len) {
    if (index - hashmap.get(nums[index]) <= k) {
      return true;
    }
    hashmap.set(nums[index], index);
    index++;
  }
  return false;
};
