/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function(n) {
  return buildTree(1, n);
};

var buildTree = function(start, end) {
  if (start > end) {
      return [null];
  }
  if (start === end) {
      return [new TreeNode(start)];
  }
  const tree = [];
  for (let i = start; i <= end; i++) {
      const lefts = buildTree(start, i - 1);
      const rights = buildTree(i + 1, end);
      for (const left of lefts) {
          for (const right of rights) {
              tree.push(new TreeNode(i, left, right));
          }
      }
  }
  return tree;
}