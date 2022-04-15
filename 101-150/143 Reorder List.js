/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * use recursive way to achieve
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
  var now = head;
  var i = 0;
  var iterate = function (node) {
    if (node.next) {
      i++;
      iterate(node.next);
    }
    if (i > 0) {
      const temp = now.next;
      now.next = node;
      node.next = temp;
      now = temp;
    }
    i -= 2;
  }
  iterate(now);
  now.next = null;
  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Using Stack and Double Point to solve
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
  var now = head;
  var p = head;
  var q = head;
  var stack = [];
  while(q && q.next) {
    p = p.next;
    q = q.next.next;
  }
  if (q) {
    p = p.next;
  }
  while(p) {
    stack.push(p);
    p = p.next;
  }
  while(stack.length) {
    const temp = now.next;
    now.next = stack.pop();
    now.next.next = temp;
    now = temp;
  }
  now.next = null;
  return head; 
};

