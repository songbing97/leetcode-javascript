/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  let node = root;
  while(true) {
      if (node.val > p.val && node.val > q.val) {
          node = node.left;
          continue;
      }
      if (node.val < p.val && node.val < q.val) {
          node = node.right;
          continue;
      }
      return node;
  }
};

