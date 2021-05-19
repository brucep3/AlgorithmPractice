/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.elementStack = [];
    this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.elementStack.push(val);
    if(this.minStack.length) {
        if(val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        } else {
            // val > this.minStack[this.minStack.length - 1]
            this.minStack.push(this.minStack[this.minStack.length-1]);
        }
    } else {
        // this.minStack.length === 0
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.pop();
    return this.elementStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.elementStack[this.elementStack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */