var MaxStack = function() {
  this.maxStore = [];
  this.stack = [];
};

/** 
* @param {number} x
* @return {void}
*/
MaxStack.prototype.push = function(x) {
  this.stack.push(x);
  if (!(this.maxStore[this.maxStore.length - 1] > x)) {
      this.maxStore.push(x);
  }
};

/**
* @return {number}
*/
MaxStack.prototype.pop = function() {
  const res = this.stack.pop();
  if (res === this.maxStore[this.maxStore.length - 1]) {
      return this.maxStore.pop();
  }
  return res;
};

/**
* @return {number}
*/
MaxStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MaxStack.prototype.peekMax = function() {
  return this.maxStore[this.maxStore.length - 1];
};

/**
* @return {number}
*/
MaxStack.prototype.popMax = function() {
  const res = this.maxStore.pop();
  for (let i = this.stack.length - 1; i > -1; i--) {
      if (this.stack[i] === res) {
          this.stack.splice(i, 1);
          break;
      }
  }
  const temp = this.stack;
  this.stack = [];
  this.maxStore = [];
  temp.forEach(e => {
      this.push(e);
  })
  return res;
};

/**
* Your MaxStack object will be instantiated and called as such:
* var obj = new MaxStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.peekMax()
* var param_5 = obj.popMax()
*/

// another way is push MaxValue Each time. Two stacks has same length.