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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
  if (!root) {
      return [];
  }
  const res = [];
  let children = [root];
  let direction = 'left';
  while(children.length !== 0) {
      let length = children.length;
      const newChildren = [];
      const levelValues = [];
      while(length !== 0) {
          length--;
          let node;
          if (direction === 'left') {
              node = children.shift();
          } else {
              node = children.pop();
          }
          levelValues.push(node.val);
          if (direction === 'left') {
              if (node.left) {
                  newChildren.push(node.left);
              }
              if (node.right) {
                  newChildren.push(node.right);
              }
          } else {
              if (node.right) {
                  newChildren.unshift(node.right);
              }
              if (node.left) {
                  newChildren.unshift(node.left);
              }
          }
          
      }
      direction = direction === 'left' ? 'right' : 'left';
      res.push(levelValues);
      children = newChildren;
  }
  return res;
};