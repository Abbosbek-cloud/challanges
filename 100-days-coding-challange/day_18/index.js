// LeetCode 15. 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  const { length } = nums;
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    if (nums[i] > 0) {
      break;
    }
    let l = i + 1;
    let r = length - 1;
    while (l < r) {
      const currSum = nums[i] + nums[l] + nums[r];
      if (currSum === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      } else if (currSum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return result;
};

// LeetCode 133. Clone Graph

/**
 * @param {Node} node
 * @return {Node}
 */

const cloneNode = (node, cloned) => {
  const clone_node = new Node(node.val, []);
  cloned.set(node.val, clone_node);
  for (let n of node.neighbors) {
    if (cloned.has(n.val)) {
      clone_node.neighbors.push(cloned.get(n.val));
    } else {
      const clone_n = cloneNode(n, cloned);
      clone_node.neighbors.push(clone_n);
    }
  }
  return clone_node;
};

var cloneGraph = function (node) {
  if (node != null) {
    const cloned = new Map();
    const clone_node = cloneNode(node, cloned);
    return clone_node;
  }
};
