var a = [1,3,5,6,7,8,9,10,11,12,13];

var dichotomicSearch = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    const middle = Math.floor(left + right);
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[middle] < target) {
      left = middle + 1;
      continue;
    } else {
      right = middle - 1;
      continue;
    }
  }
  return -1;
}

console.log(dichotomicSearch(a, 6));
