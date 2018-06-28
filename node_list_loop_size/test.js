var test = require('tape');
const { NodeList, Node } = require('./nodelist');
const { loop_size } = require('./loop_size');

test('Node list loop size', function (t) {
  let node1 = new Node();
  let node2 = new Node();
  let node3 = new Node();
  let node4 = new Node();
  let myNodeList = new NodeList(node1);
  myNodeList.addNode(node2);
  myNodeList.addNode(node3);
  myNodeList.addNode(node4);
  node4.next = node2;
  t.equal(loop_size(myNodeList), 3, 'Loop size should be equal 3');
  let myNodeList2 = new NodeList(node1);
  let looper;
  for (let i = 0; i < 50; i++) {
    let node = new Node();
    if (i === 21) {
      looper = node;
    }
    myNodeList2.addNode(node);
  }
  myNodeList2.tail.next = looper;
  t.equal(loop_size(myNodeList2), 29, "Loop size of 29 is expected");
  let myNodeList3 = new NodeList(node1);
  for (let i = 0; i < 3904; i++) {
    let node = new Node();
    if (i === 2817) {
      looper = node;
    }
    myNodeList3.addNode(node);
  }
  myNodeList3.tail.next = looper;
  t.equal(loop_size(myNodeList3), 1087, "Loop size of 1087 is expected");
  t.end();
});