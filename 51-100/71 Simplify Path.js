/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
  const stack = [];
  const items = path.split('/');
  for (const item of items) {
    if (item === '..') {
      stack.pop();
    } else if (item.length && item !== '.') {
      stack.push(item);
    }
  }
  return '/' + stack.join('/');
};