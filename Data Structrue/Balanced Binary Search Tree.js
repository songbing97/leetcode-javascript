class BinarySearchTreeNode {
  constructor(key, value = key, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  get isLeaf() { 
    return this.left === null && this.right === null;
  }

  get hasChildren() {
    return !this.isLeaf;
  }

  get isRoot() {
    return this.parent === null;
  }
}

class BalanceTree {
  constructor(key, value = key) {
    this.root = new BinarySearchTreeNode(key, value);
  }

  *preOrderTraversal(node = this.root) {
    yield node.value;
    yield* this.preOrderTraversal(node.left);
    yield* this.preOrderTraversal(node.right); 
  }

  *inOrderTraversal(node = this.root) {
    yield* this.inOrderTraversal(node.left);
    yield node.value;
    yield* this.inOrderTraversal(node.right); 
  }

  *postOrderTraversal(node = this.root) {
    yield* this.postOrderTraversal(node.left);
    yield* this.postOrderTraversal(node.right); 
    yield node.value;
  }

  getDeep(node = this.root) {
    if (!node) {
      return 0;
    }
    const leftDeep = this.getDeep(node.left);
    const rightDeep = this.getDeep(node.right);
    return Math.max(leftDeep, rightDeep) + 1;
  }

  find(key) {
    for (const node of this.preOrderTraversal()) {
      if (node.key === key) {
        return node;
      }
    }
    return false;
  }

  has(key) {
    for (const node of this.preOrderTraversal()) {
      if (node.key === key) {
        return true;
      }
    }
    return false;
  }

  insert(node) {
    let position = this.root;
    if (position !== null) {
      this.root = node;
      return true;
    }
    while(true) {
      if (position.key === node.key) {
        return false;
      }
      if (position.key < node.key) {
        if (position.right !== null) {
          position = position.right;
        } else {
          position.right = node;
          node.parent = position;
          break;
        }
      } else {
        if (position.left !== null) {
          position = position.left;
        } else {
          position.left = node;
          node.parent = position;
          break;
        }
      }
    }
    this.reBalance();
    return true;
  }

  delete(key) {
    const node = this.find(key);
    if (!node) {
      return false;
    }

    const isLeftChild = node.parent.left === node;
    const hasBothChildren = node.left !== null && node.right !== null;
    // directly delete node, if the node is a leaf node
    if (node.isLeaf) {
      if (node.isRoot) {
        this.root = null;
        return node;
      }
      if (isLeftChild) {
        node.parent.left = null;
        return node;
      } else {
        node.parent.right = null;
        return node;
      }
    } else if (!hasBothChildren) {
      if (node.left !== null) {
        if (node.isRoot) {
          this.root = node.left;
          this.root.parent = null;
          return node;
        }
        if (isLeftChild) {
          node.parent.left = node.left;
          node.left.parent = node.parent;
          return node;
        } else {
          node.parent.right = node.left;
          node.left.parent = node.parent;
          return node;
        }
      } else {
        if (node.isRoot) {
          this.root = node.right;
          this.root.parent = null;
          return node;
        }
        if (isLeftChild) {
          node.parent.left = node.right;
          node.right.parent = node.parent;
          return node;
        } else {
          node.parent.right = node.right;
          node.right.parent = node.parent;
          return node;
        }
      }
    } else {
      const leftDeep = this.getDeep(node.left);
      const rightDeep = this.getDeep(node.right);
      if (node.isRoot) {
        if (leftDeep < rightDeep) {
          this.root = node.right;
          this.root.parent = null;
          this.root.left = node.left;
          return node;
        } else {
          this.root = node.left;
          this.root.parent = null;
          this.root.right = node.right;
          return node;
        }
      } else {
        const isLeftChild = node.parent.left.left === node;
        if (leftDeep < rightDeep) {
          let rightMostSmall = node.right;
          if (rightMostSmall.left) {
            while(rightMostSmall.left) {
              rightMostSmall = rightMostSmall.left;
            }
            // get the smallest child of right true, and set new right tree.
            rightMostSmall = this.delete(rightMostSmall.key);
            rightMostSmall.right = node.right;
            node.right.parent = rightMostSmall;
          }
          if (isLeftChild) {
            node.parent.left = rightMostSmall;
          } else {
            node.parent.right = rightMostSmall;
          }
          rightMostSmall.parent = node.parent;
          // let nextMostSmall = node.right;
          // while(nextMostSmall.left) {
          //   nextMostSmall = nextMostSmall.left;
          // }
          // nextMostSmall.left = node.left;
        } else {
          if (isLeftChild) {
            node.parent.left = node.left;
          } else {
            node.parent.right = node.left;
          }
        }
      }
    }
    
    const isRoot = node
    const parentLeftDeep = this.getDeep()
  }

  reBalance() {

  }

  rotateLeft() {

  }

  rotateRight() {

  }

}