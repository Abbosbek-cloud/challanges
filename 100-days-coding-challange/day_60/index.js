// LeetCode 18. 4Sum

var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let result = new Array(),
    store = new Array();

  //k= 4 (since it's 4 sum)
  //target = target(given)
  function helper(start, target, k) {
    //base case: is just, when we have k === 2,
    //we do the opposite of it, base case technically would be two sum approach after if statement
    if (k !== 2) {
      //looping until we have K values remaining since it's 4Sum, we want 4 values remaining
      //we will have 4 pointers, if we have done the for loop way so, yea
      //like 2 for loop pointers, and one left pointer and one right pointer
      //since we already have one for loop, so we want to have 3 pointers remaining, so thats why (k+1)
      //we looping till (nums.length-k+1)
      for (let i = start; i < nums.length - k + 1; i++) {
        //skip if same element
        if (i > start && nums[i] === nums[i - 1]) continue;

        //choose
        store.push(nums[i]);

        //explore
        helper(i + 1, target - nums[i], k - 1);

        //unchoose
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

        //skip all the duplicates that left and right have stumbled on
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        //one more increment, because we have already worked with this number
        //if while loop had worked, we would end with let's say [0, 0, 3]
        //end of that 0, we would need to move that 3
        left++;
        right--;
      }
    }
  }
  //left = 0(since we want to start from the beginning of the array)
  helper(0, target, 4, nums);

  return result;
};
