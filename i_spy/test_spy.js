const test = require('tape');
const { spyOn } = require('./spy');

test('Lets spy', function(t){
  function add(a, b) {
    return a + b;
  }
  let adder = spyOn(add);
  t.equal(adder(2,5), 7);
  t.equal(adder(4,8), 12);
  t.equal(adder.callCount(), 2);
  t.equal(adder.wasCalledWith(2), true);
  t.equal(adder.wasCalledWith(9), false);
  t.equal(adder.returned(12), true);
  t.equal(adder.returned(7), true);
  t.equal(adder.returned(8),false);
  t.end();
})