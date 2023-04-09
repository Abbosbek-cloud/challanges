// LeetCode 70. Climbing Stairs

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  let stepArr = new Array(n + 1);
  stepArr[1] = 1;
  stepArr[2] = 2;
  for (let i = 3; i <= n; i++) {
    stepArr[i] = stepArr[i - 1] + stepArr[i - 2];
  }
  return stepArr[n];
};

// LeetCode 83. Remove Duplicates from Sorted List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
  let curr = head;

  while (curr != null && curr.next != null) {
    if (curr.next.val === curr.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};

// LeetCode 509. Fibanochchi Number

/**
 * @param {number} n
 * @return {number}
 */

var fib = function (n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  let sum = [0, 1];
  for (let i = 2; i < n; i++) {
    sum[i] = sum[i - 1] + sum[i - 2];
  }
  return sum[n - 1] + sum[n - 2];
};

// LeetCode 873. Length of Longest fibanochchi subsequence

/**
 * @param {number[]} arr
 * @return {number}
 */

var lenLongestFibSubseq = function (arr) {
  let len = arr.length,
    indexes = new Map(),
    longest = new Map(),
    res = 0;
  arr.map((val, indx) => (indexes[val] = indx));
  for (let i = 0; i < len; ++i) {
    for (let j = 0; j < i; ++j) {
      let item = indexes[arr[i] - arr[j]];
      if (item === undefined || item >= j) continue;
      if (longest[item * len + j] === undefined) longest[item * len + j] = 2;
      longest[j * len + i] = longest[item * len + j] + 1;
      res = Math.max(res, longest[j * len + i]);
    }
  }
  return res >= 3 ? res : 0;
};
