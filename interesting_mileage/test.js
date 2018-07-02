const test = require('tape');
const { isInteresting } = require('./isInteresting');

test('Find interesting mileage values', function(t) {
  t.equal(isInteresting(3, [1337, 256]), 0, '0');
  t.equal(isInteresting(1336, [1337, 256]), 1, '1');
  t.equal(isInteresting(1335, [1337, 256]), 1, '1');
  t.equal(isInteresting(1337, [1337, 256]), 2, '2');
  t.equal(isInteresting(111, [1337, 256]), 2, '2');
  t.equal(isInteresting(110, [1337, 256]), 1, '1');
  t.equal(isInteresting(500000, [1337, 256]), 2, '2');
  t.equal(isInteresting(9999999, [1337, 256]), 2, '2');
  t.end();
})