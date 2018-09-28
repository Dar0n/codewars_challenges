const test = require('tape');
const { diamond } = require('./diamond');

test('If possible, draw a diamon of given size', function(t){
  t.equal(diamond(3), " *\n***\n *\n");
  t.equal(diamond(5), "  *\n ***\n*****\n ***\n  *\n");
  t.equal(diamond(2), null);
  t.equal(diamond(-3), null);
  t.equal(diamond(0), null);
  t.end();
})