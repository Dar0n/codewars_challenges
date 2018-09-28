const test = require('tape');
const { diamond } = require('./diamond');

test('If possible, draw a diamon of given size', function(t){
  t.equal(diamond(2), 2, 'Should be just equal parameter');
  t.end();
})