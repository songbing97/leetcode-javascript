/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrderBottom = function(root) {
  if (!root) {
      return [];
  }
  const res = [];
  let children = [root];
  while(children.length > 0) {
      let i = children.length;
      const nextChildren = [];
      const levelValues = [];
      while(i > 0) {
          i--;
          const node = children.shift();
          levelValues.push(node.val);
          if (node.left) {
              nextChildren.push(node.left);
          }
          if (node.right) {
              nextChildren.push(node.right);
          }
      }
      res.unshift(levelValues);
      children = nextChildren;
  }
  return res;
};