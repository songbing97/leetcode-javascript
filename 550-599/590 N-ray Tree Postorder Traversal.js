/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root, res = []) {
  if (!root) {
      return res;
  }
  for (let i = 0; i < root.children.length; i++) {
      postorder(root.children[i], res);
  }
  res.push(root.val);
  return res;
};