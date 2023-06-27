// LeetCode 373. Find K Pairs with Smallest Sums

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

var kSmallestPairs = function (nums1, nums2, k) {
  const pq = new MaxPriorityQueue({ priority: (v) => v });

  for (let i = 0; i < nums1.length && i <= k; i++) {
    for (let j = 0; j < nums2.length && j <= k; j++) {
      const pairSum = nums1[i] + nums2[j];

      if (pq.size() === k && pairSum > pq.front().priority) {
        break;
      }
      pq.enqueue([nums1[i], nums2[j]], pairSum);
      if (pq.size() > k) pq.dequeue();
    }
  }

  const result = [];
  while (pq.size() > 0) result.push(pq.dequeue().element);
  return result;
};
