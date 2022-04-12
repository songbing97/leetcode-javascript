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
 var maxPathSum = function(root) {
  let maxRes = -Infinity;
  var getMax = function(node) {
      if (!node) {
          return 0;
      }
      const leftMax = getMax(node.left);
      const rightMax = getMax(node.right);
      const bigger = Math.max(leftMax, rightMax);
      maxRes = Math.max((leftMax + rightMax + node.val), (leftMax + node.val), (rightMax + node.val), node.val, maxRes);
      return Math.max((bigger + node.val), node.val);
  }
  getMax(root);
  return maxRes;
};

