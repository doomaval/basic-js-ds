const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  r = null;

  root() {
    return this.r;
  }

  add(data) {
    this.r = addNode(this.r, data);

    function addNode(node, data) {
      if (node === null) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }
      if (node.data < data) {
        node.right = addNode(node.right, data);
      } else {
        node.left = addNode(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return hasNode(this.r, data);

    function hasNode(node, data) {
      if (node === null) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return node.data < data
        ? hasNode(node.right, data)
        : hasNode(node.left, data);
    }
  }

  find(data) {
    return findData(this.r, data);

    function findData(node, data) {
      if (node === null) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return node.data < data
        ? findData(node.right, data)
        : findData(node.left, data);
    }
  }

  remove(data) {
    this.r = rd(this.r, data);
    function rd(node, data) {
      if (!node) {
        return false;
      }

      if (data < node.data) {
        node.left = rd(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = rd(node.right, data);
        return node;
      } else {
        if (!node.right && !node.left) {
          return null;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        }
        if (node.right === null) {
          node = node.left;
          return node;
        }

        let mr = node.right;
        while (mr.left) {
          mr = mr.left;
        }
        node.data = mr.data;
        node.right = rd(node.right, mr.data);
        return node;
      }
    }
  }

  min() {
    return minData(this.r);

    function minData(node) {
      if (node === null) {
        return null;
      }

      if (node.left === null) {
        return node.data;
      }

      return minData(node.left);
    }
  }

  max() {
    return maxData(this.r);

    function maxData(node) {
      if (node === null) {
        return null;
      }

      if (node.right === null) {
        return node.data;
      }

      return maxData(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};
