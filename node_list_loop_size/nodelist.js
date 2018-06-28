function NodeList(head) {
  this.head = head;
  this.tail = head;
  this.addNode = addNode;

  function addNode(node) {
    this.tail.next = node;
    this.tail = node;
  }
}

function Node() {
  this.next = null;
}

module.exports.NodeList = NodeList;
module.exports.Node = Node;