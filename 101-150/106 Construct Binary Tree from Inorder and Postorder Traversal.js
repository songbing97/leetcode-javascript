/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
  if (postorder.length === 0) {
      return null;
  }
  if (postorder.length === 1) {
      return new TreeNode(postorder[0]);
  }
  const value = postorder[postorder.length - 1];
  const indexInorder = inorder.indexOf(value);
  return new TreeNode(value, 
      buildTree(inorder.slice(0, indexInorder), postorder.slice(0, indexInorder)),
      buildTree(inorder.slice(indexInorder + 1, indexInorder.length), postorder.slice(indexInorder, -1)));
};