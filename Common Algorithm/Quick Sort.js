var a = [13, 43, 98, 8, 24, 38, 12, 3];

var quickSort = function(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const left = [];
  const right = [];
  let i = 1;
  while(i < nums.length) {
    if (nums[i] <= nums[0]) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
    i++;
  }
  return quickSort(left).concat([nums[0]]).concat(quickSort(right));
}

a = quickSort(a);
console.log(a);