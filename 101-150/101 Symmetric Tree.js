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
 var isSymmetric = function(root) {
  if (root === null) {
      return true;
  }
  return check(root.left, root.right);
};

var check = function (left, right) {
  if (left === null || right === null) {
      return left === right;
  }
  if (left.val !== right.val) {
      return false;
  }
  return check(left.right, right.left) && check(left.left, right.right);
}