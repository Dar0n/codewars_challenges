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



module.exports.loop_size = loop_size;