// LeetCode 303. Range Sum Query - Immutable

var NumArray = function (nums) {
  arr = nums;
};

NumArray.prototype.sumRange = function (left, right) {
  sum = 0;
  for (let i = left; i <= right; i++) {
    sum += arr[i];
  }
  return sum;
};
