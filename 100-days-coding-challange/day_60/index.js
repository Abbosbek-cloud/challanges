// LeetCode 18. 4Sum

var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let result = new Array(),
    store = new Array();
  function helper(start, target, k) {
    if (k !== 2) {
      for (let i = start; i < nums.length - k + 1; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        store.push(nums[i]);
        helper(i + 1, target - nums[i], k - 1);
        store.pop();
      }
      return;
    }

    let left = start;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[left] + nums[right] > target) right--;
      else if (nums[left] + nums[right] < target) left++;
      else {
        let arr = new Array().concat(store);
        arr.push(nums[left]);
        arr.push(nums[right]);
        result.push(arr);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  helper(0, target, 4, nums);

  return result;
};
