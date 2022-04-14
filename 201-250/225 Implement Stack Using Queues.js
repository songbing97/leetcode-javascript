var MyStack = function() {
  // 限制，只能用push和shift
  this.queue0 = [];
  this.queue1 = [];
  this.first = true;
};

/** 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  if (this.first) {
      this.queue0.push(x);
  } else {
      this.queue1.push(x);
  }
};

/**
* @return {number}
*/
MyStack.prototype.pop = function() {
  if (this.first) {
      while(this.queue0.length !== 1) {
          this.queue1.push(this.queue0.shift());
      }
      this.first = !this.first;
      return this.queue0.shift();
  } else {
      while(this.queue1.length !== 1) {
          this.queue0.push(this.queue1.shift());
      }
      this.first = !this.first;
      return this.queue1.shift();
  }
};

/**
* @return {number}
*/
MyStack.prototype.top = function() {
  if (this.first) {
      while(this.queue0.length !== 1) {
          this.queue1.push(this.queue0.shift());
      }
      this.first = !this.first;
      const res = this.queue0.shift();
      this.queue1.push(res);
      return res;
  } else {
      while(this.queue1.length !== 1) {
          this.queue0.push(this.queue1.shift());
      }
      this.first = !this.first;
      const res = this.queue1.shift();
      this.queue0.push(res);
      return res;
  }
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.queue0.length === 0 && this.queue1.length === 0;
};

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/