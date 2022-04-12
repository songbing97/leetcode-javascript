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
 * @return {number[]}
 */
 var rightSideView = function(root) {
  if (!root) {
      return [];
  }
  let children = [root];
  let res = []
  while(children.length) {
      let i = 0;
      const newChildren = [];
      const length = children.length;
      res.push(children[length - 1].val);
      while(i < length) {
          if (children[i].left) {
              newChildren.push(children[i].left);
          }
          if (children[i].right) {
              newChildren.push(children[i].right);
          }
          i++;
      }
      children = newChildren;
  }
  return res;
};