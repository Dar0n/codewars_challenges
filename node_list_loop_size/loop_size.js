const { NodeList, Node } = require('./nodelist');

function loop_size(nodelist) {
  slow = nodelist.head.next;
  fast = nodelist.head.next.next;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let counter = 1;
  while (fast.next !== slow) {
    fast = fast.next;
    counter++;
  }
  return counter;
}

let node1 = new Node();
let node2 = new Node();
let node3 = new Node();
let node4 = new Node();
let myNodeList = new NodeList(node1);
myNodeList.addNode(node2);
myNodeList.addNode(node3);
myNodeList.addNode(node4);
node4.next = node2;

console.log(loop_size(myNodeList));