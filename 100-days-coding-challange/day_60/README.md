# Day - 60

```JavaScript
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
```

```
Approach: Two Pointer
It's an array problem.

Since solving 2Sum, 3Sum, now tackling 4Sum, I'm convinced, could only go up, so it's more like a generic 'KSum' problem.
We can use loop like we did for 3Sum, where we will have 1 extra loop, before we hit while loop,
same for 5Sum, where we will have 3 for loop, before we hit the while loop,
same goes for increasing number, the for loop, will only increase before we hit the while loop,
so to avoid having large number of for loop to tackle this K Sum problem,
I'm implementing a generalized solution, that could work with any number using backtracking.
Backtracking technique I use is: loop(usually), choose(pushing a value in a storage/container), 
explore(recursive call), unchoose(removing the lates value previouslypushed in, from the container)

We want to sort the array, as we can avoid duplicates in an efficient manner,
then we will recurse through the array elements, until we have 2 element
once we got 2 element, we can basically, send that 2 element for while loop (similar to 2Sum problem)
```
