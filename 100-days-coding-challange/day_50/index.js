// LeetCode 350. Intersection of Two Arrays II

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) {
  let map1 = [],
    len1 = nums1.length,
    len2 = nums2.length,
    index = 0;
  while (index < len1) {
    if (!map1[nums1[index]]) map1[nums1[index]] = 1;
    else map1[nums1[index]] += 1;
    index++;
  }
  let ans = [];
  for (let i = 0; i < len2; i++) {
    if (!map1[nums2[i]] || map1[nums2[i]] == 0) {
      continue;
    } else {
      ans.push(nums2[i]);
      map1[nums2[i]] -= 1;
    }
  }
  return ans;
};
