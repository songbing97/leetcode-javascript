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
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
  let sum = 0;
  let res = false;
  var count = function(node) {
      if (res) {
          return true;
      }
      if (node === null) {
          return ;
      }
      sum += node.val;
      if (!node.left && !node.right) {
          if (sum === targetSum) {
              res = true;
          }
      }
      count(node.left);
      count(node.right);
      sum -= node.val;
  }
  count(root);
  return res;
};

