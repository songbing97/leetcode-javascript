var MinStack = function() {
  this.store = [];
  this.stack = [];
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.store.push(val);
  if (this.stack.length === 0 || this.stack[this.stack.length - 1] >= val) {
      this.stack.push(val);
  } 
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  const val = this.store.pop();
  if (val === this.stack[this.stack.length - 1]) {
      this.stack.pop();
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.store[this.store.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/