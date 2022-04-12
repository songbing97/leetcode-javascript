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
 * @return {TreeNode}
 */
 var upsideDownBinaryTree = function(root) {
  if (!root) {
      return null;
  }
  let res = root;
  var reverse = function(leftNode, rightNode, node) {
      if (!leftNode) {
          return;
      }
      if (!leftNode.left) {
          res = leftNode;
      }
      reverse(leftNode.left, leftNode.right, leftNode);
      leftNode.left = rightNode;
      leftNode.right = node;
  }
  reverse(root.left, root.right, root);
  root.left = null;
  root.right = null;
  return res;
};