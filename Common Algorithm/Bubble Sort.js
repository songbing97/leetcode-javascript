var a = [13, 43, 98, 8, 24, 38, 12, 3];

var bubbleSort = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let hasChange = false;
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        hasChange = true;
      }
    }
    if (!hasChange) {
      break;
    }
  }
}

bubbleSort(a);
console.log(a);