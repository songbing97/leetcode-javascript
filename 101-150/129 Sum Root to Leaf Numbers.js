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
 * @return {number}
 */
 var sumNumbers = function(root) {
  let count = 0;
  let store = 0;
  var getCount = function(node) {
      if (!node) {
          return;
      }
      store = store * 10 + node.val;
      if (!node.left && !node.right) {
          count += store;
      }
      getCount(node.left);
      getCount(node.right);
      store = Math.floor(store / 10);
  }
  getCount(root);
  return count;
};