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
 * @return {boolean}
 */
 var isBalanced = function(root) {
  return getHigh(root)[1];
};

var getHigh = function(node) {
  if (!node) {
      return [0, true];
  }
  const left = getHigh(node.left);
  const right = getHigh(node.right);

  return [Math.max(left[0], right[0]) + 1, Math.abs(left[0] - right[0]) < 2 && left[1] && right[1]];
}