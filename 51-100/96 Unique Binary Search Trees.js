var numTrees = function(n) {
  const countMap = new Map();
  countMap.set(1, 1);
  countMap.set(2, 2);
  countMap.set(3, 5);
  if (countMap.has(n)) {
      return countMap.get(n);
  }
  var getCount = function(n) {
      if (n <= 1) {
          return 1;
      }
      const number = countMap.get(n);
      if (number) {
          return number;
      }
      let sum = 0;
      for (let i = 1; i <= n; i++) {
          const left = getCount(i - 1);
          const right = getCount(n - i);
          const result = left * right;
          sum += result;
      }
      countMap.set(n, sum);
      return sum;
  }
  return getCount(n);
};