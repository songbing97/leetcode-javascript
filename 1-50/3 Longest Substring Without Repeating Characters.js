/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let left = 0, right = 0;
  let max = 0;
  const set = new Set();
  while(right < s.length) {
      while(set.has(s[right])) {
          set.delete(s[left])
          left++;
      }
      set.add(s[right]);
      max = Math.max(max, set.size);
      right++;
  }
  return max;
};