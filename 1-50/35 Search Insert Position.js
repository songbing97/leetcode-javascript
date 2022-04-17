/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

/**
 * dichotomy 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[middle] > target) {
      right = middle - 1;
      continue;
    }
    if (nums[middle] < target) {
      left = middle + 1;
      continue;
    }
  }
  return Math.round((left + right) / 2);
};