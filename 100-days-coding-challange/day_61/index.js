// LeetCode 108. Convert Sorted Array to Binary Search Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function (nums) {
  let h = getHalfI(nums);
  let root = new TreeNode(nums[h]);
  let left = split(nums, 0, h);
  let right = split(nums, h + 1, nums.length);

  return build(nums, root, left, right);
};

function split(nums, left, right) {
  return nums.slice(left.right);
}

function build(nums, root, left, right) {
  if (left.length == 0 && right.length == 0) return root;
  let rooti = nums.indexOf(root.val);

  if (left.length > 0) {
    let lh = getHalfI(left);
    root.left = build(
      nums,
      new TreeNode(left[lh]),
      split(left, 0, lh),
      split(left, lh + 1, left.length)
    );
  }
  if (right.length > 0) {
    let rh = getHalfI(right);
    root.right = build(
      nums,
      new TreeNode(right[rh]),
      split(right, 0, rh),
      split(right, rh + 1, right.length)
    );
  }

  return root;
}

function getHalf(arr) {
  return Math.floor(arr.length / 2);
}
