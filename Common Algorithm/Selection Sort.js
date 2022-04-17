var a = [13, 43, 98, 8, 24, 38, 12, 3];

var selectionSort = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = nums[i];
    let index = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j];
        index = j;
      }
    }
    const temp = nums[i];
    nums[i] = min;
    nums[index] = temp;
  }
}

selectionSort(a);
console.log(a);