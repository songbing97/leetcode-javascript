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
 var levelOrder = function(root){
  if (!root) {
      return [];
  }
  const res = [];
  let result = [root];
  while(result.length !== 0) {
      const nextChildren = [];
      const values = []
      result.forEach(e => {
          values.push(e.val);
          if (e.left) {
              nextChildren.push(e.left);
          }
          if (e.right) {
              nextChildren.push(e.right);
          }
      })
      res.push(values);
      result = nextChildren;
  }
  return res;
};
