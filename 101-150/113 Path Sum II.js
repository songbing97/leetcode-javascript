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
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
  const res = [];
  let sum = 0;
  const roots = [];
  var getCount = function(node) {
      if (!node) {
          return;
      }
      sum += node.val;
      roots.push(node.val);
      if (!node.left && !node.right) {
          if (sum === targetSum) {
              res.push([...roots]);
          }
      }
      getCount(node.left);
      getCount(node.right);
      sum -= node.val;
      roots.pop();
  }
  getCount(root);
  return res;
};