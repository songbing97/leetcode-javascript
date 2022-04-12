/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
  if (!root) {
      return null;
  }
  let children = [root];
  while(children.length > 0) {
      let length = children.length;
      const newChildren = []
      for (let i = 0; i < length; i++) {
          if (children[i].left) {
              newChildren.push(children[i].left);
          }
          if (children[i].right) {
              newChildren.push(children[i].right);
          }
          if (i < length - 1) {
              children[i].next = children[i + 1];
          }
      }
      children[length -1].next = null;
      children = newChildren;
  }

  return root;
};

// use recursion

