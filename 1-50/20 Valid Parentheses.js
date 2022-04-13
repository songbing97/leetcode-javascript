/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  let i = 0;
  const res = [];
  const map = {
      '(': ')',
      '{': '}',
      '[': ']'
  }
  while(i < s.length) {
      if (map[s[i]]) {
          res.push(s[i]);
      } else {
          if (s[i] !== map[res.pop()]) {
              return false;
          }
      }
      i++;
  }
  return res.length === 0;
};