const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let s = l;
  while (s.value === k) {
    let t = s.next;
    s = t;
  }
  let t = s;
  while (t.next !== null) {
    let t2 = t.next;
    if (t2.value === k) {
      t.next = t2.next;
      continue;
    }
    t2 = t;
    t = t2.next;
  }
  return s;
}

module.exports = {
  removeKFromList,
};
