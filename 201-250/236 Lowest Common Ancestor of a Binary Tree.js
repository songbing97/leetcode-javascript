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
  let res;
  var getNearest = function(node) {
      if (!node) {
          return [false, false];
      }
      const left = getNearest(node.left);
      const right = getNearest(node.right);
      if (res) {
          return ;
      }
      const arr = [];
      if (node.val === p.val) {
          arr[0] = true;
      } else {
          arr[0] = left[0] || right[0];
      }
      if (node.val === q.val) {
          arr[1] = true;
      } else {
          arr[1] = left[1] || right[1];
      }
      if (arr[0] && arr[1]) {
          res = node;
      }
      return arr;
  }
  getNearest(root);
  return res;
};

// another way to pass 
var lowestCommonAncestor = function(root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (!left) {
    return right;
  }
  if (!right) {
    return left;
  }
  if (left !== null && right!== null) {
    return root;
  }
  if (left === null) {
    return right;
  }
  if (right === null)  {
    return left;
  }
  return root;
}