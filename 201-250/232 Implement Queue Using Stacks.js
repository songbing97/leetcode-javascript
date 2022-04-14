var MyQueue = function() {
  this.stack0 = []; // using pop
  this.stack1 = [];
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
  if (this.stack0.length > 0) {
      return this.stack0.pop();
  } else {
      while(this.stack1.length > 0) {
          this.stack0.push(this.stack1.pop());
      }
      return this.stack0.pop();
  }
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  if (this.stack0.length > 0) {
      return this.stack0[this.stack0.length - 1];
  } else {
      while(this.stack1.length > 0) {
          this.stack0.push(this.stack1.pop());
      }
      return this.stack0[this.stack0.length - 1];
  }
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.stack0.length === 0 && this.stack1.length === 0;
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/