const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.len === 0) {
      this.head = new Element(value);
      this.len = 1;
      this.tail = this.head;
      return;
    }

    let last = this.tail;
    last.next = new Element(value);
    this.len += 1;
    this.tail = last.next;
    return;
  }

  dequeue() {
    let first = this.head;
    this.head = first.next;
    this.len--;
    return first.value;
  }
}

class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = {
  Queue,
};
